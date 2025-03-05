import "./Components/Photoupload.scss";
import { Plus } from 'lucide-react';
const ExpandableButton = () => {
  return (
    <button className="expandable-button">
      {/* Plus Icon */}
      <div className="icon-container">
        <Plus className="plus-icon" />
      </div>

      {/* Button Text */}
      <span className="button-text">Save & New</span>
    </button>
  );
};

export default ExpandableButton;
