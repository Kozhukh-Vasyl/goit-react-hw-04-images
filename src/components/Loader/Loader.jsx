import { ColorRing } from "react-loader-spinner";
import './Loader.css';

const Loader = () => {
    return (
        <div className="Spiner">
           <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#76EF90', '#8DFA78', '#B3E072', '#FAFA7A', '#F0E17A']}
/>
        </div>
    );
 };

export default Loader;
