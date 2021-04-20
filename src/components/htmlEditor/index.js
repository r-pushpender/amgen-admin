import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Styles
import "./styles.scss";

function HtmlEditor(props) {
  return (
    <div className={`html-editor-style`}>
      <CKEditor
        editor={ClassicEditor}
        data={props.data}
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        // onChange={(event, editor) => {
        //   const data = editor.getData();
        //   console.log({event, editor, data});
        // }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
    </div>
  );
}

export default HtmlEditor;
