import {Upload, message} from "antd";

// Styles
import "./styles.scss";

function UploadFile() {
  const {Dragger} = Upload;

  const propsSection = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const {status} = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className={`upload-style`}>
      <Dragger {...propsSection}>
        <button className="btn-upload">Add File</button>
        <p className="ant-upload-hint">Or drag and drop files</p>
      </Dragger>
    </div>
  );
}

export default UploadFile;
