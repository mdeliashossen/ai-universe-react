import React from "react";

const Modal = (props) => {
    const {description,features,image_link,integrations}=props.modalData;
//  console.log(Object.values(features || {}));
// console.log(integrations);
  return (
    <div>
      <dialog id="card-modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body">
            <h1 className="card-title">{description}</h1>
            <div className="flex justify-between">
                <span>
                    <h3>Features</h3>
                    {
                    Object.values(features || {}).map(item=> <li className="list-decimal">{item.feature_name}</li>)
                    }
                </span>

                <span>
                <h3>Integrations</h3>
                    {integrations?.map((item)=><li className="list-decimal">{item}</li>)}
                </span>
            </div>
            </div>

            <div>
            <figure>
              <img
                src={image_link && image_link[0]}
                
              />
            </figure>
            </div>
          </div>
          <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
