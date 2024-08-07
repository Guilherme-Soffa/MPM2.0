package br.mpm.comum.exception;

public class NegocioException extends RuntimeException {


    private final String className;

    public NegocioException(String className, String key) {
        super(key);
        this.className = className;
    }


    public NegocioException(String classeName, String keyMessage, Throwable cause) {
        super(keyMessage, cause);
        this.className = classeName;
    }

    public String getClasseName() {
        return className;
    }
}
