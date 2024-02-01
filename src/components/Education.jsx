import "../styles/Interests.css";

function Education({link,education}) {
  return (
  <>
    
    <ul className="ul">
      <a href={link}>
      <li>{education}</li>
    </a>
    </ul>
  </>
  );
}
export default Education;