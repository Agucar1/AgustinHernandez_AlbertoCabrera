let pacienteIdToDelete;

function confirmDelete(pacienteId) {
    pacienteIdToDelete = pacienteId;
    const deleteConfirmationModal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
    deleteConfirmationModal.show();
}

async function deletePaciente(){
    await deleteBy(pacienteIdToDelete);
    const deleteConfirmationModal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmationModal'));
    deleteConfirmationModal.hide();
    location.reload();
    const deleteSuccessToast = new bootstrap.Toast(document.getElementById('deleteSuccessToast'));
    deleteSuccessToast.show();
};

async function deleteBy(pacienteId) {
    try {
        const response = await fetch(`/pacientes/${pacienteId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el paciente');
        }

        // Aquí se podría manejar la actualización de la UI, por ejemplo, eliminar la fila de la tabla

    } catch (error) {
        console.error('Error:', error);
    }
}