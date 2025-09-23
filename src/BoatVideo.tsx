function BoatVideo() {
  return (
    <video
      className="h-full w-full object-cover animate-clip-from-top-animation"
      autoPlay
      muted
      loop
    >

      <source src="src/assets/New folder/ADT-test2.mp4" type="video/mp4" />

    </video>
  );
}

export default BoatVideo;
