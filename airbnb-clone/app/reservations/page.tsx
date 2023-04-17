
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "../actions/getCurrentuser";
import getReservations from "../actions/getResevations";

import TripsClient from "../trips/TripsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      
    )
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      
    );
  }

  return (
      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    
  );
}
 
export default ReservationsPage;