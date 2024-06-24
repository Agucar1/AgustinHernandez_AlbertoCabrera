let odontologoIdToDelete;

function confirmDelete(odontologoId) {
    odontologoIdToDelete = odontologoId;
    const deleteConfirmationModal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
    deleteConfirmationModal.show();
}

async function deleteOdontologo() {
    await deleteBy(odontologoIdToDelete);
    const deleteConfirmationModal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmationModal'));
    deleteConfirmationModal.hide();
    location.reload();
    const deleteSuccessToast = new bootstrap.Toast(document.getElementById('deleteSuccessToast'));
    deleteSuccessToast.show();
};

async function deleteBy(odontologoId) {
    try {
        const response = await fetch(`/odontologos/${odontologoId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el odontologo');
        }

        // Aquí se podría manejar la actualización de la UI, por ejemplo, eliminar la fila de la tabla

    } catch (error) {
        console.error('Error:', error);
    }
}