package sailpoint.object;

import sailpoint.tools.Message;
import sailpoint.tools.xml.PersistentXmlObject;
import sailpoint.tools.xml.SerializationMode;
import sailpoint.tools.xml.XMLProperty;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface ProvisioningResult extends PersistentXmlObject, Serializable {
    /**
     * Indicates that the request was accepted and passed validation,
     * but it was given to another system and we do not know
     * when it will be committed. If possible the connector
     * should also set a request id for tracking.
     * <p>
     * This is the default status, if no result object is returned or
     * if the result object is missing a status, it can be assumed
     * to have been queued.
     */
    String STATUS_QUEUED = "queued";
    /**
     * Indicates that the request was fully processed and the changes
     * are known to have been made. The plan evaluator can use this
     * to immediately update the identity to reflect the changes rather
     * than waiting for the next aggregation.
     */
    String STATUS_COMMITTED = "committed";
    /**
     * Indicates that the request was not processed due to a
     * fatal error.  The connector should save one or more
     * messages on the error list.
     */
    String STATUS_FAILED = "failed";
    /**
     * Indicates that the request was not processed due to a
     * non fatal error and that it should be retried at a later
     * time. The connector may also set the retryInterval property
     * to indicate the preferred wait time.
     */
    String STATUS_RETRY = "retry";

    @XMLProperty
    String getTargetIntegration();

    @XMLProperty
    String getStatus();

    @XMLProperty
    String setStatus();

    @XMLProperty
    String getRequestID();

    @XMLProperty(mode = SerializationMode.LIST)
    List<Message> getWarnings();

    @XMLProperty(mode = SerializationMode.LIST)
    List<Message> getErrors();

    @XMLProperty
    int getRetryInterval();

    ResourceObject getObject();

    void addError(Message m);

    void addError(String s);

    void addError(Throwable t);

    void addWarning(List<Message> m);

    void addWarning(Message m);

    void addWarning(String s);

    boolean isCommitted();

    boolean isQueued();

    boolean isFailed();

    boolean isRetry();

    boolean isSubmitted();

    boolean isFailure();

    boolean hasMessages();

    Map<String, Object> toMap();

    @SuppressWarnings("unchecked")
    void fromMap(Map map);

    boolean isQueuedWithId();
}
