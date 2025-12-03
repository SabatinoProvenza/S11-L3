import { useSelector, useDispatch } from "react-redux"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Favourites = () => {
  const favourites = useSelector((state) => state.prefs.content)
  const dispatch = useDispatch()

  if (favourites.length === 0) {
    return (
      <Container className="mt-5">
        <h1>Favourite Companies</h1>
        <p>Non ci sono aziende nei favourites</p>
      </Container>
    )
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="my-3">
          <h1>Favourite Companies</h1>

          <ul className="p-1">
            {favourites.map((company, i) => (
              <li
                key={i}
                className="d-flex justify-content-between align-items-center border border-secondary rounded-2 p-3 my-2"
              >
                <Link to={`/${company}`}>{company}</Link>

                <Button
                  variant="outline-danger"
                  className="my-1"
                  size="sm"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FAVOURITE",
                      payload: company,
                    })
                  }
                >
                  <i className="bi bi-trash"></i> Remove
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
