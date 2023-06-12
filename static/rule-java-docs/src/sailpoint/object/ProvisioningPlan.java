//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package sailpoint.object;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.JoinPoint.StaticPart;
import org.aspectj.runtime.internal.Conversions;
import org.aspectj.runtime.reflect.Factory;
import sailpoint.api.SailPointContext;
import sailpoint.tools.GeneralException;
import sailpoint.tools.Message;
import sailpoint.tools.TracingAspect;
import sailpoint.tools.Util;
import sailpoint.tools.xml.AbstractXmlObject;
import sailpoint.tools.xml.SerializationMode;
import sailpoint.tools.xml.XMLClass;
import sailpoint.tools.xml.XMLObjectFactory;
import sailpoint.tools.xml.XMLProperty;
import sailpoint.tools.xml.XMLReferenceResolver;

@XMLClass
public class ProvisioningPlan extends AbstractXmlObject {
    public static final String APP_IIQ = "IIQ";
    public static final String IIQ_APPLICATION_NAME = "IdentityIQ";
    /** @deprecated */
    @Deprecated
    public static final String ATT_IIQ_PASSWORD = "password";
    public static Object ATT_ASSIGNED_SCOPE;
    public static final String ATT_OP = "op";
    public static final String ATT_OBJECT_APPLICATION = "application";
    public static final String ATT_OBJECT_ATTRIBUTES = "attributes";
    public static final String ATT_OBJECT_ARGUMENTS = "args";
    public static final String ATT_ATTRIBUTE_NAME = "name";
    public static final String ATT_PERMISSION_TARGET = "target";
    public static final String ATT_PERMISSION_RIGHTS = "rights";
    public static final String ATT_REQUEST_ARGUMENTS = "args";
    Identity _identity;
    String _nativeIdentity;
    List<ProvisioningPlan.AccountRequest> _accounts;
    List<ProvisioningPlan.ObjectRequest> _objectRequests;
    Attributes<String, Object> _arguments;
    String _trackingId;
    List<Identity> _requesters;
    List<ProvisioningTarget> _provisioningTargets;
    List<ProvisioningPlan.AbstractRequest> _filtered;
    List<Question> _questionHistory;
    String _targetIntegration;
    ProvisioningResult _result;
    boolean _provisioned;
    long _maintenanceExpiration;

    public ProvisioningPlan() {
    }

    public void add(ProvisioningPlan.AccountRequest account) {

        try {
            if (account != null) {
                if (this._accounts == null) {
                    this._accounts = new ArrayList();
                }

                this._accounts.add(account);
            }

            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public void remove(ProvisioningPlan.AccountRequest account) {

        try {
            if (account != null && this._accounts != null) {
                this._accounts.remove(account);
            }

            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public void addRequest(ProvisioningPlan.AbstractRequest req) {

        try {
            if (req instanceof ProvisioningPlan.AccountRequest) {
                this.add((ProvisioningPlan.AccountRequest)req);
            } else if (req instanceof ProvisioningPlan.ObjectRequest) {
                this.addObjectRequest((ProvisioningPlan.ObjectRequest)req);
            }

            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public void setAccountRequests(List<ProvisioningPlan.AccountRequest> reqs) {

        try {
            this._accounts = reqs;
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public List<ProvisioningPlan.AccountRequest> getAccountRequests() {

        try {
            List var2;
            List var3 = var2 = this._accounts;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }


    public boolean isEmpty() {

        try {
            boolean var2;
            boolean var3 = var2 = this.isEmpty(this._accounts) && this.isEmpty(this._objectRequests);
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public List<Identity> getRequesters() {

        try {
            List var2;
            List var3 = var2 = this._requesters;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getComments() {

        try {
            String var2;
            String var3 = var2 = this.getString("comments");
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public void setComments(String c) {

        try {
            this.put("comments", c);
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public String getSource() {

        try {
            String var2;
            String var3 = var2 = this.getString("source");
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public Identity getIdentity() {

        try {
            Identity var2;
            Identity var3 = var2 = this._identity;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getNativeIdentity() {

        try {
            String var2;
            String var3 = var2 = this._nativeIdentity;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public void setNativeIdentity(String s) {

        try {
            this._nativeIdentity = s;
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public Attributes<String, Object> getArguments() {

        try {
            Attributes var2;
            Attributes var3 = var2 = this._arguments;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public void setArguments(Attributes<String, Object> atts) {

        try {
            this._arguments = atts;
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public void setTargetIntegration(String name) {

        try {
            this._targetIntegration = name;
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public void setResult(ProvisioningResult r) {

        try {
            this._result = r;
            Object var4 = null;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public ProvisioningPlan.AccountRequest add(String appname, String identity, ProvisioningPlan.AccountRequest.Operation op) {
        Object[] var6 = new Object[]{appname, identity, op};

        try {
            ProvisioningPlan.AccountRequest account = null;
            if (appname != null && identity != null) {
                account = new ProvisioningPlan.AccountRequest();
                account.setApplication(appname);
                account.setNativeIdentity(identity);
                account.setOperation(op);
                this.add(account);
            }

            return account;
        } catch (Throwable var13) {
            throw var13;
        }
    }

    public ProvisioningPlan.AccountRequest add(String appname, String nativeIdentity, String attname, ProvisioningPlan.Operation op, Object value) {
        Object[] var9 = new Object[]{appname, nativeIdentity, attname, op, value};

        try {
            ProvisioningPlan.AccountRequest account = null;
            if (appname != null && attname != null) {
                account = this.getAccountRequest(appname, (String)null, nativeIdentity);
                if (account == null) {
                    account = new ProvisioningPlan.AccountRequest();
                    account.setApplication(appname);
                    account.setNativeIdentity(nativeIdentity);
                    this.add(account);
                }

                ProvisioningPlan.AttributeRequest att = new ProvisioningPlan.AttributeRequest();
                att.setName(attname);
                att.setOperation(op);
                att.setValue(value);
                account.add(att);
            }

            return account;
        } catch (Throwable var18) {
            throw var18;
        }
    }

    public void put(String name, Object value) {

        try {
            if (name != null) {
                if (this._arguments == null) {
                    this._arguments = new Attributes();
                }

                this._arguments.putClean(name, value);
            }

            Object var6 = null;
        } catch (Throwable var8) {
            throw var8;
        }
    }

    public Object get(String name) {

        try {
            Object var10000 = this._arguments != null ? this._arguments.get(name) : null;
            Object var4 = var10000;
            Object var5 = var10000;
            return var4;
        } catch (Throwable var7) {
            throw var7;
        }
    }

    public List<ProvisioningPlan.AccountRequest> getAccountRequests(String appname) {

        try {
            List reqs = new ArrayList();
            if (this._accounts != null && appname != null) {
                Iterator var3 = this._accounts.iterator();

                while(var3.hasNext()) {
                    ProvisioningPlan.AccountRequest req = (ProvisioningPlan.AccountRequest)var3.next();
                    if (appname.equals(req.getApplication())) {
                        reqs.add(req);
                    }
                }
            }

            return reqs;
        } catch (Throwable var10) {
            throw var10;
        }
    }

    public List<ProvisioningPlan.AccountRequest> getAccountRequests(String appname, String nativeIdentity) {

        try {
            List requests = new ArrayList();
            Iterator var4 = Util.iterate(this._accounts).iterator();

            while(true) {
                ProvisioningPlan.AccountRequest request;
                do {
                    do {
                        if (!var4.hasNext()) {
                            return requests;
                        }

                        request = (ProvisioningPlan.AccountRequest)var4.next();
                    } while(!Util.nullSafeEq(appname, request.getApplication()));
                } while(!Util.isNullOrEmpty(nativeIdentity) && !Util.nullSafeEq(nativeIdentity, request.getNativeIdentity()));

                requests.add(request);
            }
        } catch (Throwable var12) {
            throw var12;
        }
    }

    public ProvisioningPlan.AccountRequest getAccountRequest(String appname, String instance, String nativeIdentity) {
        Object[] var5 = new Object[]{appname, instance, nativeIdentity};

        try {
            ProvisioningPlan.AccountRequest var9;
            ProvisioningPlan.AccountRequest var10 = var9 = this.getAccountRequest(appname, instance, nativeIdentity, false);
            return var9;
        } catch (Throwable var12) {
            throw var12;
        }
    }


    private ProvisioningPlan.AccountRequest getAccountRequest(String appname, String instance, String nativeIdentity, boolean onlyAppName) {
        Object[] var9 = new Object[]{appname, instance, nativeIdentity, Conversions.booleanObject(onlyAppName)};

        try {
            ProvisioningPlan.AccountRequest found = null;
            if (this._accounts != null && appname != null) {
                label40: {
                    Iterator var6 = this._accounts.iterator();

                    ProvisioningPlan.AccountRequest req;
                    do {
                        do {
                            if (!var6.hasNext()) {
                                break label40;
                            }

                            req = (ProvisioningPlan.AccountRequest)var6.next();
                        } while(!appname.equals(req.getApplication()));
                    } while(!onlyAppName && (!Util.nullSafeEq(req.getInstance(), instance, true) || !Util.nullSafeEq(req.getNativeIdentity(), nativeIdentity, true)));

                    found = req;
                }
            }

            return found;
        } catch (Throwable var17) {
            throw var17;
        }
    }

    public Map toMap() {

        try {
            Map map = new HashMap();
            if (this._nativeIdentity != null) {
                map.put("identity", this._nativeIdentity);
            }

            ArrayList list;
            Iterator var3;
            Map rmap;
            if (this._accounts != null) {
                list = new ArrayList();
                var3 = this._accounts.iterator();

                while(var3.hasNext()) {
                    ProvisioningPlan.AccountRequest req = (ProvisioningPlan.AccountRequest)var3.next();
                    rmap = req.toMap();
                    if (rmap != null) {
                        list.add(rmap);
                    }
                }

                map.put("accounts", list);
            }

            if (this._objectRequests != null) {
                list = new ArrayList();
                var3 = this._objectRequests.iterator();

                while(var3.hasNext()) {
                    ProvisioningPlan.ObjectRequest req = (ProvisioningPlan.ObjectRequest)var3.next();
                    rmap = req.toMap();
                    if (rmap != null) {
                        list.add(rmap);
                    }
                }

                map.put("objects", list);
            }

            if (this._arguments != null) {
                map.put("args", this._arguments);
            }

            if (this._result != null) {
                map.put("result", this._result.toMap());
            }

            return map;
        } catch (Throwable var10) {
            throw var10;
        }
    }

    public static void removeAll(List list, List values, boolean nocase) {
        Object[] var6 = new Object[]{list, values, Conversions.booleanObject(nocase)};

        try {
            if (list == values) {
                list.clear();
            } else if (nocase) {
                Iterator var3 = values.iterator();

                while(var3.hasNext()) {
                    Object o = var3.next();
                    remove(list, o, nocase);
                }
            } else {
                list.removeAll(values);
            }

            Object var10 = null;
        } catch (Throwable var12) {
            throw var12;
        }
    }

    public static class AttributeRequest extends ProvisioningPlan.GenericRequest {

        public AttributeRequest() {

        }

        public AttributeRequest(Map map) {

            try {
                this.fromMap(map);
            } catch (Throwable var5) {
                throw var5;
            }
        }

        public AttributeRequest(String name, Object value) {

            try {
                this._name = name;
                this._value = value;
            } catch (Throwable var7) {
                throw var7;
            }
        }

        public AttributeRequest(String name, ProvisioningPlan.Operation op, Object value) {
            Object[] var5 = new Object[]{name, op, value};

            try {
                this._name = name;
                this._op = op;
                this._value = value;
            } catch (Throwable var10) {
                throw var10;
            }
        }

        public AttributeRequest(String name, ProvisioningPlan.Operation op, Object value, String assignmentId) {
            this(name, op, value);
            Object[] var6 = new Object[]{name, op, value, assignmentId};

            try {
                this._assignmentId = assignmentId;
            } catch (Throwable var12) {
                throw var12;
            }
        }

        public AttributeRequest(ProvisioningPlan.AttributeRequest src) {
            super(src);

        }

        public ProvisioningPlan.GenericRequest instantiate() {

            try {
                ProvisioningPlan.AttributeRequest var2;
                ProvisioningPlan.AttributeRequest var3 = var2 = new ProvisioningPlan.AttributeRequest();
                return var2;
            } catch (Throwable var5) {
                throw var5;
            }
        }

        public boolean isSecret() {

            try {
                boolean secret = false;
                boolean declaredSecret = this.getBoolean("secret");
                boolean appearsSecret = ProvisioningPlan.isSecret(this.getName());
                secret = appearsSecret || declaredSecret;
                return secret;
            } catch (Throwable var8) {
                throw var8;
            }
        }

        public Object getValue(SailPointContext ctx) throws GeneralException {

            try {
                Object var10000;
                Object var5;
                if (this._value != null && this._value instanceof Reference) {
                    Reference ref = (Reference)this._value;
                    var10000 = var5 = ctx.getReferencedObject(ref.getClassName(), ref.getId(), ref.getName());
                } else {
                    var10000 = var5 = this._value;
                }

                Object var6 = var10000;
                return var5;
            } catch (Throwable var8) {
                throw var8;
            }
        }

        public Map toMap() {

            try {
                Map map = new HashMap();
                map.put("name", this._name);
                map.put("value", this._value);
                if (this._op != null) {
                    map.put("op", this._op.toString());
                }

                if (this._arguments != null) {
                    map.put("args", this._arguments);
                }

                if (this._result != null) {
                    map.put("result", this._result.toMap());
                }

                return map;
            } catch (Throwable var6) {
                throw var6;
            }
        }

        public void fromMap(Map map) {

            try {
                this._name = Util.getString(map, "name");
                this._value = map.get("value");
                Object o = map.get("op");
                if (o != null) {
                    this._op = (ProvisioningPlan.Operation)Enum.valueOf(ProvisioningPlan.Operation.class, o.toString());
                }

                o = map.get("args");
                if (o instanceof Map) {
                    this._arguments = new Attributes();
                    this._arguments.putAll((Map)o);
                }

                o = map.get("result");
                if (o instanceof Map) {
                    this._result = new ProvisioningResult((Map)o);
                }

                Object var5 = null;
            } catch (Throwable var7) {
                throw var7;
            }
        }
    }

    public static enum Operation {
        Set,
        Add,
        Remove,
        Revoke,
        Retain;

        private String messageKey;

        private Operation(String messageKey) {
            Object[] var5 = new Object[]{var1, Conversions.intObject(var2), messageKey};

            try {
                this.messageKey = messageKey;
            } catch (Throwable var10) {
                throw var10;
            }
        }

        public String getMessageKey() {

            try {
                String var2;
                String var3 = var2 = this.messageKey;
                return var2;
            } catch (Throwable var5) {
                throw var5;
            }
        }

        static {

            try {
                Set = new ProvisioningPlan.Operation("Set", 0, "provisioning_plan_op_set");
                Add = new ProvisioningPlan.Operation("Add", 1, "provisioning_plan_op_add");
                Remove = new ProvisioningPlan.Operation("Remove", 2, "provisioning_plan_op_remove");
                Revoke = new ProvisioningPlan.Operation("Revoke", 3, "provisioning_plan_op_revoke");
                Retain = new ProvisioningPlan.Operation("Retain", 4, "provisioning_plan_op_retain");
            } catch (Throwable var1) {
                if (var1 instanceof ExceptionInInitializerError) {
                    throw (ExceptionInInitializerError)var1;
                }

                throw var1;
            }

        }
    }

    public static class AccountRequest extends ProvisioningPlan.AbstractRequest {
        public static final String TYPE_ROLE = "role";
        public static final String TYPE_ENTITLEMENT = "entitlement";
        public static final String ATTACHMENTS = "attachments";
        public static final String ATTACHMENT_CONFIG_LIST = "attachmentConfigList";
        boolean _roleExpansion;

        public AccountRequest() {
        }

        public AccountRequest(Map map) {
            super(map);
        }

        public AccountRequest(ProvisioningPlan.AccountRequest src) {
            super((ProvisioningPlan.AbstractRequest)src);
        }

        public AccountRequest(ProvisioningPlan.AccountRequest.Operation op, String app, String inst, String id) {
            Object[] var6 = new Object[]{op, app, inst, id};

            try {
                this.setOperation(op);
                this.setApplication(app);
                this.setInstance(inst);
                this.setNativeIdentity(id);
            } catch (Throwable var12) {
                throw var12;
            }
        }

        public ProvisioningPlan.AbstractRequest instantiate() {
            try {
                ProvisioningPlan.AccountRequest var2;
                ProvisioningPlan.AccountRequest var3 = var2 = new ProvisioningPlan.AccountRequest();
                return var2;
            } catch (Throwable var5) {
                throw var5;
            }
        }

        public ProvisioningPlan.AccountRequest clone() {

            try {
                ProvisioningPlan.AccountRequest var2;
                ProvisioningPlan.AccountRequest var3 = var2 = new ProvisioningPlan.AccountRequest(this);
                return var2;
            } catch (Throwable var5) {
                throw var5;
            }
        }

        public void setOperation(ProvisioningPlan.AccountRequest.Operation op) {

            try {
                if (op != null) {
                    this.setOp((ProvisioningPlan.ObjectOperation)Enum.valueOf(ProvisioningPlan.ObjectOperation.class, op.toString()));
                }

                Object var4 = null;
            } catch (Throwable var6) {
                throw var6;
            }
        }

        public ProvisioningPlan.AccountRequest.Operation getOperation() {

            try {
                ProvisioningPlan.AccountRequest.Operation op = null;
                ProvisioningPlan.ObjectOperation oop = this.getOp();
                if (oop != null) {
                    op = (ProvisioningPlan.AccountRequest.Operation)Enum.valueOf(ProvisioningPlan.AccountRequest.Operation.class, oop.toString());
                }

                return op;
            } catch (Throwable var7) {
                throw var7;
            }
        }

        public static enum Operation {
            Create,
            Modify,
            Delete,
            Disable,
            Enable,
            Unlock,
            Lock;

            private Operation() {

                try {
                } catch (Throwable var7) {
                    throw var7;
                }
            }

            static {

                try {
                    Create = new ProvisioningPlan.AccountRequest.Operation("Create", 0);
                    Modify = new ProvisioningPlan.AccountRequest.Operation("Modify", 1);
                    Delete = new ProvisioningPlan.AccountRequest.Operation("Delete", 2);
                    Disable = new ProvisioningPlan.AccountRequest.Operation("Disable", 3);
                    Enable = new ProvisioningPlan.AccountRequest.Operation("Enable", 4);
                    Unlock = new ProvisioningPlan.AccountRequest.Operation("Unlock", 5);
                    Lock = new ProvisioningPlan.AccountRequest.Operation("Lock", 6);
                } catch (Throwable var1) {
                    if (var1 instanceof ExceptionInInitializerError) {
                        throw (ExceptionInInitializerError)var1;
                    }

                    throw var1;
                }

            }
        }
    }

    public static enum ObjectOperation {
        Create,
        Modify,
        Delete,
        Disable,
        Enable,
        Unlock,
        Lock,
        Set;

        private String messageKey;

        private ObjectOperation(String messageKey) {
            try {
                this.messageKey = messageKey;
            } catch (Throwable var10) {
                throw var10;
            }
        }

        public String getMessageKey() {

            try {
                String var2;
                String var3 = var2 = this.messageKey;
                return var2;
            } catch (Throwable var5) {
                throw var5;
            }
        }

        static {
            try {
                Create = new ProvisioningPlan.ObjectOperation("Create", 0, "resource_object_op_create");
                Modify = new ProvisioningPlan.ObjectOperation("Modify", 1, "resource_object_op_modify");
                Delete = new ProvisioningPlan.ObjectOperation("Delete", 2, "resource_object_op_delete");
                Disable = new ProvisioningPlan.ObjectOperation("Disable", 3, "resource_object_op_disable");
                Enable = new ProvisioningPlan.ObjectOperation("Enable", 4, "resource_object_op_enable");
                Unlock = new ProvisioningPlan.ObjectOperation("Unlock", 5, "resource_object_op_unlock");
                Lock = new ProvisioningPlan.ObjectOperation("Lock", 6, "resource_object_op_lock");
                Set = new ProvisioningPlan.ObjectOperation("Set", 7, "resource_object_op_set");
            } catch (Throwable var1) {
                if (var1 instanceof ExceptionInInitializerError) {
                    throw (ExceptionInInitializerError)var1;
                }

                throw var1;
            }
        }
    }
}
