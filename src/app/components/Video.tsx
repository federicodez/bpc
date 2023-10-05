type VideoProps = {
  video: string;
};

const Video = ({ video }: VideoProps) => {
  return (
    <video className="card-content w-fit h-fit" controls>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
