import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <ReactLoading
        type="spin"
        color="#2dd2f7"
        height={50}
        width={50}
        delay={1.5}
      />
    </div>
  );
};

export default Loading;
