import { useDispatch } from 'react-redux';
import { saveExamData } from '../ducks/examInfo';

function DashBoard() {
  const dispatch = useDispatch();
  const handleSaveData = (data) => {
    dispatch(saveExamData(data));
  };
  return (
    <div style={{ paddingTop: '5rem' }}>
      <button
        type="button"
        onClick={() => {
          handleSaveData({
            url: 'https://dc4-g22.digialm.com//per/g22/pub/32341/touchstone/AssessmentQPHTMLMode1//32341O2230/32341O2230S24D23621/16628815322939738/124194210189066_32341O2230S24D23621E1.html',
          });
        }}
      >
        Click for Checking Result
      </button>
    </div>
  );
}

export default DashBoard;
