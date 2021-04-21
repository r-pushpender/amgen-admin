import ButtonOutline from "../../components/buttons/buttonOutline";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import InputPrimary from "../../components/inputPrimary";
import MainContainer from "../../components/mainContainer";
import SelectRole from "../../components/selectRole";

import {MdSecurity, MdRemoveRedEye, MdCardTravel} from "react-icons/md";

// Styles
import "./styles.scss";
import SelectPrimary from "../../components/selectPrimary";

function AddAdmin() {
  const roleList = [
    {
      icon: <MdSecurity />,
      title: "Admin",
      description: "Description for the specific role in 1 line",
      selectRole: "active",
    },
    {
      icon: <MdCardTravel />,
      title: "Client",
      description: "Description for the specific role in 1 line",
    },
    {
      icon: <MdRemoveRedEye />,
      title: "Viewer",
      description: "Description for the specific role in 1 line",
    },
  ];
  return (
    <div className="create-content-style">
      <MainContainer pageTitle="Add Admin">
        <div className="card">
          <div className="info-content">
            <h4 className="title4">Basic Information</h4>
            <div className="description">
              Some preliminary information about the content
            </div>
          </div>

          <div className="row mt--25">
            <div className="col-sm-6">
              <InputPrimary placeholder="" lable="First Name" />
            </div>
            <div className="col-sm-6">
              <InputPrimary placeholder="" lable="Last Name" />
            </div>
            <div className="col-sm-6">
              <InputPrimary placeholder="" lable="Email Address" />
            </div>
            <div className="col-sm-6">
              <InputPrimary placeholder="" lable="Phone Number" />
            </div>
          </div>

          <div className="divider" />
          <div className="row">
            <div className="col-sm-12">
              <h5 className="title5">Admin Role</h5>
              <div className="description">
                How will this user use this dashboard?
              </div>
            </div>
          </div>
          <div className="row mt--25">
            {roleList.map((data, index) => {
              return (
                <div className="col-sm-3" key={index}>
                  <SelectRole
                    title={data.title}
                    description={data.description}
                    icon={data.icon}
                    selectedRole={data.selectRole}
                  />
                </div>
              );
            })}
          </div>
          <div className="divider" />
          <div className="row">
            <div className="col-sm-12">
              <h5 className="title5">Usage Rights</h5>
              <div className="description">
                What access level does this admin have?
              </div>
            </div>

            <div className="col-sm-6 mt--20">
              <SelectPrimary lable="Access Level" options={["Choose", "test1", "test2", "test3"]} />
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="row">
          <div className="col-sm-12 d-flex justify-content-end">
            <ButtonOutline title="Cancel" btnStyle="mr--10 sm" />
            <ButtonPrimary title="Save" btnStyle="sm" />
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AddAdmin;
