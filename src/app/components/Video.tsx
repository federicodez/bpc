type VideoProps = {
  video: string;
};

const Video = ({ video }: VideoProps) => {
  return (
    <video className="card-content" width="480" height="360" controls>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
