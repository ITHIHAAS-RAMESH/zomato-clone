import react from 'react'

export default function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "white",justifyContent:"center",alignItems:"center",padding: "8px",borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }