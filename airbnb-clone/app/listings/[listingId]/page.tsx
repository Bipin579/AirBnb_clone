import getCurrentUser from '@/app/actions/getCurrentuser'
import getListingById from '@/app/actions/getListingById'
import EmptyState from '@/app/components/EmptyState'
import React from 'react'
import ListingClient from './ListingClient'
import getReservations from '@/app/actions/getResevations'

interface IParams{
   listingId?:string
}

const ListingPage = async({params}:{params:IParams}) => {
    const listing=await getListingById(params)
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

    if(!listing){
        return(
            <EmptyState/>
        )
    }
  return (
    <ListingClient
      listing={listing}
      reservations={reservations}
     currentUser={currentUser}
    />
  )
}

export default ListingPage