'use client';

import { Loader2, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoSectionProps {
  /** Optional video URL for YouTube embed or direct video link */
  videoUrl?: string;
  /** Whether to show loading state */
  isLoading?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export default function VideoSection({
  videoUrl,
  isLoading = false,
  className,
}: VideoSectionProps = {}) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    if (videoUrl) {
      setShowVideo(true);
    }
  };

  const getEmbedUrl = (url: string) => {
    // Convert YouTube URL to embed format
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    }
    return url;
  };

  return (
    <section
      className={cn(
        'relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white',
        className
      )}
      aria-labelledby='video-section-title'
    >
      {/* Decorative elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Top decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className='absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-aquafresh to-aquafresh-light'
        />

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='absolute bottom-16 right-16 w-48 h-48 rounded-full bg-gradient-to-tl from-sensodyne to-sensodyne-light'
        />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 lg:mb-16'
        >
          <h2
            id='video-section-title'
            className={cn(
              'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
              'mb-4 bg-gradient-to-r from-sensodyne via-aquafresh to-aquafresh-light bg-clip-text text-transparent'
            )}
          >
            Pogledajte našu priču
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl'>
            Saznajte više o važnosti oralne higijene kod dece i kako naši
            proizvodi pomažu u održavanju zdravlja zuba.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mx-auto max-w-4xl'
        >
          <div className='relative group'>
            {/* Video Frame */}
            <div
              className={cn(
                'relative w-full aspect-video rounded-2xl overflow-hidden',
                'shadow-2xl shadow-primary/10 border border-border/50',
                'bg-gradient-to-br from-muted via-background to-muted'
              )}
            >
              {showVideo && videoUrl ? (
                /* Actual Video Embed */
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title='Haleon - Važnost oralnog zdravlja kod dece'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='absolute inset-0 w-full h-full'
                  onLoad={() => setIsVideoLoaded(true)}
                  aria-label='Video o važnosti oralnog zdravlja kod dece'
                />
              ) : (
                /* Video Placeholder */
                <div className='absolute inset-0 flex flex-col items-center justify-center p-8'>
                  {/* Brand colored background pattern */}
                  <div className='absolute inset-0 opacity-5'>
                    <div className='absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-aquafresh to-transparent' />
                    <div className='absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-sensodyne to-transparent' />
                  </div>

                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlayClick}
                    disabled={isLoading}
                    className={cn(
                      'relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24',
                      'bg-gradient-to-br from-sensodyne to-sensodyne-dark rounded-full',
                      'shadow-xl shadow-sensodyne/30 border-4 border-white/20',
                      'transition-all duration-300 hover:shadow-2xl hover:shadow-sensodyne/40',
                      'focus:outline-none focus:ring-4 focus:ring-sensodyne/30',
                      isLoading && 'opacity-50 cursor-not-allowed',
                      !videoUrl && 'cursor-default opacity-75'
                    )}
                    aria-label={
                      videoUrl
                        ? 'Reprodukuj video'
                        : 'Video će uskoro biti dostupan'
                    }
                  >
                    {isLoading ? (
                      <Loader2 className='w-8 h-8 sm:w-10 sm:h-10 text-white animate-spin' />
                    ) : (
                      <Play
                        className='w-8 h-8 sm:w-10 sm:h-10 text-white ml-1'
                        fill='currentColor'
                      />
                    )}
                  </motion.button>
                </div>
              )}

              {/* Loading overlay for iframe */}
              {showVideo && videoUrl && !isVideoLoaded && (
                <div className='absolute inset-0 flex items-center justify-center bg-muted'>
                  <Loader2 className='w-12 h-12 text-sensodyne animate-spin' />
                </div>
              )}
            </div>

            {/* Glow effect on hover */}
            <div
              className={cn(
                'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
                'bg-gradient-to-r from-aquafresh/20 via-transparent to-sensodyne/20',
                'transition-opacity duration-500 pointer-events-none',
                '-z-10 blur-xl'
              )}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
