package sailpoint.object;

@XMLClass
public class ProvisioningResult {
    public static final String STATUS_QUEUED = "queued";
    public static final String STATUS_COMMITTED = "committed";
    public static final String STATUS_FAILED = "failed";
    public static final String STATUS_RETRY = "retry";
    String _targetIntegration;
    String _status;
    ResourceObject _object;

    public ProvisioningResult() {
    }

    public String getTargetIntegration() {

        try {
            String var2;
            String var3 = var2 = this._targetIntegration;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public void setTargetIntegration(String s) {

        try {
            this._targetIntegration = s;
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public String getStatus() {

        try {
            String var2;
            String var3 = var2 = this._status;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public void setStatus(String s) {

        try {
            if ("success".equals(s)) {
                s = "queued";
            } else if ("committed".equals(s)) {
                s = "committed";
            } else if ("failure".equals(s)) {
                s = "failed";
            } else if ("retry".equals(s)) {
                s = "retry";
            } else if ("warning".equals(s)) {
                log.warn("STATUS_WARNING found in RequestResult");
                s = "committed";
            } else if ("notStarted".equals(s)) {
                log.warn("STATUS_NOT_STARTED found in RequestResult");
                s = "queued";
            } else if ("inProcess".equals(s)) {
                log.info("STATUS_IN_PROCESS found in RequestResult");
                s = "queued";
            }

            this._status = s;
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public ResourceObject getObject() {

        try {
            ResourceObject var2;
            ResourceObject var3 = var2 = this._object;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }
}
