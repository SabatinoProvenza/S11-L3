import { useSelector, useDispatch } from "react-redux"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import { removeFavouriteAction } from "../redux/actions"

const Favourites = () => {
  const favourites = useSelector((state) => state.prefs.content)
  const [selectedCompany, setSelectedCompany] = useState(null)

  const [showModal, setShowModal] = useState(false)
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
                  onClick={() => {
                    setSelectedCompany(company)
                    setShowModal(true)
                  }}
                >
                  <i className="bi bi-trash"></i> Remove
                </Button>
              </li>
            ))}
          </ul>
        </Col>

        {/* MODALE DI CONFERMA */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Rimuovere dai preferiti?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Vuoi davvero rimuovere <strong>{selectedCompany}</strong> dai
            preferiti?
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Annulla
            </Button>

            <Button
              variant="danger"
              onClick={() => {
                dispatch(removeFavouriteAction(selectedCompany))
                setShowModal(false)
              }}
            >
              Rimuovi
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  )
}

export default Favourites
