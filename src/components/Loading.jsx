import '../style/Loading.css';

function Loading() {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <span className="loading-text">Loading posts...</span>
      </div>
    );
  }
  
  export default Loading;