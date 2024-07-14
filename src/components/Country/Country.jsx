import './Country.css';
const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='country-box'>
          <h4>Country Name :{name.common}</h4>
          <img src={flags.png} alt="" />  
        </div>
    );
};

export default Country;