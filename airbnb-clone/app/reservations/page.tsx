import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentuser";
import getReservations from "../actions/getResevations";
import ReservationsCLient from "./ReservationsCLient";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }
  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="looks like you have no reservations on your properties"
      />
    );
    }
    
    return <ReservationsCLient
        reservations={reservations}
        currentuser={currentUser}

    />
};

export default ReservationPage;
