import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.prefs.content)

  // controlliamo se questa company è già nei preferiti
  const isFavourite = favourites.includes(data.company_name)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>

      <Col xs={2}>
        <i
          className={
            isFavourite ? "bi bi-heart-fill text-danger" : "bi bi-heart"
          }
          style={{
            fontSize: "1.6rem",
            cursor: "pointer",
          }}
          onClick={() => {
            if (isFavourite) {
              dispatch({
                type: "REMOVE_FAVOURITE",
                payload: data.company_name,
              })
            } else {
              dispatch({
                type: "ADD_FAVOURITE",
                payload: data.company_name,
              })
            }
          }}
        ></i>
      </Col>

      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
