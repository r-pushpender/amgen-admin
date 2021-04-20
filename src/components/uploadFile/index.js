// Styles
import "./styles.scss";

function UploadFile(props) {
  return (
    <div className={`upload-style`}>
      <div className="upload-button">
        <button className="btn-upload">Add File</button>
        Or drag and drop files
      </div>
    </div>
  );
}

export default UploadFile;
