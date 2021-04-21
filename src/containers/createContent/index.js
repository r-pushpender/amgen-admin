import ButtonOutline from "../../components/buttons/buttonOutline";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import HtmlEditor from "../../components/htmlEditor";
import InputPrimary from "../../components/inputPrimary";
import MainContainer from "../../components/mainContainer";
import SelectPrimary from "../../components/selectPrimary";
import UploadFile from "../../components/uploadFile";

// Styles
import "./styles.scss";

function CreateContent() {
  return (
    <div className="create-content-style">
      <MainContainer pageTitle="Add Content">
        <div className="card">
          <div className="info-content">
            <h4 className="title4">Basic Information</h4>
            <div className="description">
              Some preliminary information about the content
            </div>
          </div>

          <div className="row mt--25">
            <div className="col-sm-6">
              <InputPrimary placeholder="" label="Title" inputStyle="input-md" />
            </div>
            <div className="col-sm-6">
              <SelectPrimary
                lable="Category"
                placeholder="Choose"
                options={["test1", "test2", "test3"]}
              />
            </div>
          </div>

          <div className="row mt--25">
            <div className="col-sm-12">
              <HtmlEditor />
            </div>
          </div>

          <div className="divider" />
          <div className="row">
            <div className="col-sm-12">
              <h5 className="title5">Images & Videos</h5>
              <UploadFile />
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="row">
          <div className="col-sm-12 d-flex justify-content-end">
            <ButtonOutline title="Draft" btnStyle="mr--10 sm" />
            <ButtonPrimary title="Publish" btnStyle="sm" />
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default CreateContent;
