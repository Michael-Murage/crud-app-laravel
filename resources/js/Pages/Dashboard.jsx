import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { useState } from 'react';
import NewPizza from './NewPizza';
import NewRestaurant from './NewRestaurant';

export default function Dashboard(props) {
    const [newPizza, setNewPizza] = useState(false)
    const [newRest, setNewRest] = useState(false)

    const showNewPizza = () => setNewPizza(true)
    const showNewRestaurant = () => setNewRest(true)
    const hideNewPizza = () => setNewPizza(false)
    const hideNewRestaurant = () => setNewRest(false)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <Modal show={newPizza} onClose={hideNewPizza}>
                <NewPizza user={props.auth.user.id}/>
            </Modal>
            <Modal show={newRest} onClose={hideNewRestaurant}>
                <NewRestaurant user={props.auth.user.id}/>
            </Modal>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex justify-between">
                            <button className='btn btn-primary' onClick={showNewPizza}>Add New Pizza</button>
                            <button className="btn btn-primary" onClick={showNewRestaurant}>Add New Restaurant</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
