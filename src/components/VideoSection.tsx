
import React, { useRef, useState } from 'react';
import { Play, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            See How AI is Transforming Accounts Payable
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch this short demo to understand how our technology helps finance teams recover millions in overpayments
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
          {/* Video placeholder - you'll need to replace with actual video */}
          <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${playing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-navy opacity-50"></div>
            <Button 
              onClick={handlePlayVideo}
              className="bg-dd-green hover:bg-dd-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Play size={36} fill="white" />
            </Button>
          </div>
          
          <video
            ref={videoRef}
            className="w-full h-full"
            poster="/video-thumbnail.jpg" 
            onClick={() => setPlaying(!playing)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            controls={playing}
          >
            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="mt-6 flex justify-center">
          <p className="text-navy-800 text-sm flex items-center">
            <PlayCircle size={16} className="mr-1 text-dd-green" />
            Designed for Busy AP Professionals with 1+ Years of Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
