import "firebase/functions";
import withAuth from "../services/withAuth"
import SessionsView from "../views/sessions-view/sessions-view";

const Sessions = () => {

  return <SessionsView />
}

export default withAuth(Sessions)