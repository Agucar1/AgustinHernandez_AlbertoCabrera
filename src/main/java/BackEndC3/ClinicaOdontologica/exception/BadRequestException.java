package BackEndC3.ClinicaOdontologica.exception;

public class BadRequestException extends Exception {
    //llega el string y no sabe que hacer con él

    public BadRequestException(String message) {
        super(message);
    }
}