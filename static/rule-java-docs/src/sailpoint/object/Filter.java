package sailpoint.object;

import java.io.Serializable;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.JoinPoint.StaticPart;
import org.aspectj.runtime.internal.Conversions;
import org.aspectj.runtime.reflect.Factory;
import sailpoint.tools.GeneralException;
import sailpoint.tools.Parser;
import sailpoint.tools.Reflection;
import sailpoint.tools.TracingAspect;
import sailpoint.tools.Untraced;
import sailpoint.tools.Util;
import sailpoint.tools.Parser.BaseLookAhead;
import sailpoint.tools.Parser.ParseException;
import sailpoint.tools.xml.AbstractXmlObject;
import sailpoint.tools.xml.IXmlEqualable;
import sailpoint.tools.xml.SerializationMode;
import sailpoint.tools.xml.XMLClass;
import sailpoint.tools.xml.XMLProperty;

public abstract class Filter implements Serializable {
    private static final String COLLECTION_NOT_ALLOWED_MESSAGE;
    private static final Log log;
    private static final int MAX_IN_FILTER_SIZE = 100;

    public Filter() {
        
    }

    public static Filter clone(Filter src) {


        try {

            Filter neu = null;
            if (src instanceof Filter.LeafFilter) {
                neu = new Filter.LeafFilter((Filter.LeafFilter)src);
            } else if (src instanceof Filter.CompositeFilter) {
                neu = new Filter.CompositeFilter((Filter.CompositeFilter)src);
            }


            return (Filter)neu;
        } catch (Throwable var7) {

            throw var7;
        }
    }

    public static Filter compile(String filter) throws ParseException {


        try {

            Filter var3;
            Filter var4 = var3 = (new Filter.FilterCompiler()).compileFilter(filter);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter fromExample(Object o) throws GeneralException {


        try {

            Filter filter = null;
            Map props = Reflection.getNonNullPropertyValues(o);
            Iterator var3 = props.entrySet().iterator();

            while(var3.hasNext()) {
                Entry entry = (Entry)var3.next();
                Object value = entry.getValue();
                Filter eq;
                if (value instanceof Collection) {
                    eq = containsAll((String)entry.getKey(), (Collection)value);
                } else {
                    eq = eq((String)entry.getKey(), value);
                }

                if (null != filter) {
                    filter = and(eq, filter);
                } else {
                    filter = eq;
                }
            }


            return filter;
        } catch (Throwable var12) {

            throw var12;
        }
    }

    public static Filter eq(String propertyName, Object value) throws IllegalArgumentException {


        try {

            if (value instanceof Collection) {
                throw new IllegalArgumentException(MessageFormat.format(COLLECTION_NOT_ALLOWED_MESSAGE, value, "eq"));
            } else {
                Filter.LeafFilter var5;
                Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(Filter.LogicalOperation.EQ, propertyName, value);

                return var5;
            }
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter ne(String propertyName, Object value) throws IllegalArgumentException {


        try {

            if (value instanceof Collection) {
                throw new IllegalArgumentException(MessageFormat.format(COLLECTION_NOT_ALLOWED_MESSAGE, value, "ne"));
            } else {
                Filter.LeafFilter var5;
                Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(Filter.LogicalOperation.NE, propertyName, value);

                return var5;
            }
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter lt(String propertyName, Object value) throws IllegalArgumentException {


        try {

            if (value instanceof Collection) {
                throw new IllegalArgumentException(MessageFormat.format(COLLECTION_NOT_ALLOWED_MESSAGE, value, "lt"));
            } else {
                Filter.LeafFilter var5;
                Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(Filter.LogicalOperation.LT, propertyName, value);

                return var5;
            }
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter gt(String propertyName, Object value) throws IllegalArgumentException {


        try {

            if (value instanceof Collection) {
                throw new IllegalArgumentException(MessageFormat.format(COLLECTION_NOT_ALLOWED_MESSAGE, value, "gt"));
            } else {
                Filter.LeafFilter var5;
                Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(Filter.LogicalOperation.GT, propertyName, value);

                return var5;
            }
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter le(String propertyName, Object value) throws IllegalArgumentException {


        try {

            if (value instanceof Collection) {
                throw new IllegalArgumentException(MessageFormat.format(COLLECTION_NOT_ALLOWED_MESSAGE, value, "le"));
            } else {
                Filter.LeafFilter var5;
                Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(Filter.LogicalOperation.LE, propertyName, value);

                return var5;
            }
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter ge(String propertyName, Object value) throws IllegalArgumentException {


        try {

            if (value instanceof Collection) {
                throw new IllegalArgumentException(MessageFormat.format(COLLECTION_NOT_ALLOWED_MESSAGE, value, "ge"));
            } else {
                Filter.LeafFilter var5;
                Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(Filter.LogicalOperation.GE, propertyName, value);

                return var5;
            }
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter in(String propertyName, Collection<?> value) throws IllegalArgumentException {


        try {

            if (null != value && !value.isEmpty()) {
                ArrayList values = new ArrayList(value);
                List inFilters = new ArrayList();
                int valueSize = Util.size(values);
                int slice = true;

                for(int i = 0; i < valueSize; i += 100) {
                    int slice = i + 100 > valueSize ? valueSize : i + 100;
                    inFilters.add(new Filter.LeafFilter(Filter.LogicalOperation.IN, propertyName, values.subList(i, slice)));
                }

                Filter var10;
                Filter var11 = Util.size(inFilters) == 1 ? (var10 = (Filter)inFilters.get(0)) : (var10 = or((List)inFilters));

                return var10;
            } else {
                throw new IllegalArgumentException("A non-empty collection is required for an 'in' filter.");
            }
        } catch (Throwable var13) {

            throw var13;
        }
    }

    public static Filter contains(String propertyName, Object value) {


        try {

            List values = new ArrayList();
            values.add(value);
            Filter var6;
            Filter var7 = var6 = containsAll(propertyName, values);

            return var6;
        } catch (Throwable var9) {

            throw var9;
        }
    }

    public static Filter containsAll(String propertyName, Collection value) {


        try {

            Filter.LeafFilter var5;
            Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(Filter.LogicalOperation.CONTAINS_ALL, propertyName, value);

            return var5;
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter like(String propertyName, Object value) {


        try {

            Filter var5;
            Filter var6 = var5 = like(propertyName, value, Filter.MatchMode.ANYWHERE);

            return var5;
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter like(String propertyName, Object value, Filter.MatchMode matchMode) {

        Object[] var4 = new Object[]{propertyName, value, matchMode};

        try {

            Filter.LeafFilter var8;
            Filter.LeafFilter var9 = var8 = new Filter.LeafFilter(Filter.LogicalOperation.LIKE, propertyName, value, matchMode);

            return var8;
        } catch (Throwable var11) {

            throw var11;
        }
    }

    public static Filter notnull(String propertyName) {


        try {

            Filter.LeafFilter var3;
            Filter.LeafFilter var4 = var3 = new Filter.LeafFilter(Filter.LogicalOperation.NOTNULL, propertyName, (Object)null);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter isnull(String propertyName) {


        try {

            Filter.LeafFilter var3;
            Filter.LeafFilter var4 = var3 = new Filter.LeafFilter(Filter.LogicalOperation.ISNULL, propertyName, (Object)null);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter isempty(String propertyName) {


        try {

            Filter.LeafFilter var3;
            Filter.LeafFilter var4 = var3 = new Filter.LeafFilter(Filter.LogicalOperation.ISEMPTY, propertyName, (Object)null);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter join(String property, String joinProperty) {


        try {

            Filter.LeafFilter leaf = new Filter.LeafFilter(Filter.LogicalOperation.JOIN, property, (Object)null);
            leaf.setJoinProperty(joinProperty);

            return leaf;
        } catch (Throwable var9) {

            throw var9;
        }
    }

    public static Filter leftJoin(String property, String joinProperty) {


        try {

            Filter.LeafFilter leaf = new Filter.LeafFilter(Filter.LogicalOperation.LEFT_JOIN, property, (Object)null);
            leaf.setJoinProperty(joinProperty);

            return leaf;
        } catch (Throwable var9) {

            throw var9;
        }
    }

    public static Filter collectionCondition(String collectionProperty, Filter compoundFilter) {


        try {

            if (!(compoundFilter instanceof Filter.CompositeFilter)) {
                throw new IllegalArgumentException("Expected a composite filter");
            } else {
                Filter.LeafFilter var5;
                Filter.LeafFilter var6 = var5 = new Filter.LeafFilter(collectionProperty, (Filter.CompositeFilter)compoundFilter);

                return var5;
            }
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter subquery(String property, Class<?> subqueryClass, String subqueryProperty, Filter subqueryFilter) {

        Object[] var5 = new Object[]{property, subqueryClass, subqueryProperty, subqueryFilter};
        JoinPoint var4 = Factory.makeJP(var10000, (Object)null, (Object)null, var5);

        try {

            Filter.LeafFilter var10;
            Filter.LeafFilter var11 = var10 = new Filter.LeafFilter(Filter.LogicalOperation.IN, property, subqueryClass, subqueryProperty, subqueryFilter);

            return var10;
        } catch (Throwable var13) {

            throw var13;
        }
    }

    public static Filter and(Filter filter1, Filter filter2) {


        try {

            Filter.CompositeFilter var5;
            Filter.CompositeFilter var6 = var5 = new Filter.CompositeFilter(Filter.BooleanOperation.AND, new Filter[]{filter1, filter2});

            return var5;
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter and(List<Filter> children) {


        try {

            Filter.CompositeFilter var3;
            Filter.CompositeFilter var4 = var3 = new Filter.CompositeFilter(Filter.BooleanOperation.AND, children);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter and(Filter... children) {


        try {

            Filter.CompositeFilter var3;
            Filter.CompositeFilter var4 = var3 = new Filter.CompositeFilter(Filter.BooleanOperation.AND, children);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter or(Filter filter1, Filter filter2) {


        try {

            Filter.CompositeFilter var5;
            Filter.CompositeFilter var6 = var5 = new Filter.CompositeFilter(Filter.BooleanOperation.OR, new Filter[]{filter1, filter2});

            return var5;
        } catch (Throwable var8) {

            throw var8;
        }
    }

    public static Filter or(List<Filter> children) {


        try {

            Filter.CompositeFilter var3;
            Filter.CompositeFilter var4 = var3 = new Filter.CompositeFilter(Filter.BooleanOperation.OR, children);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter or(Filter... children) {


        try {

            Filter.CompositeFilter var3;
            Filter.CompositeFilter var4 = var3 = new Filter.CompositeFilter(Filter.BooleanOperation.OR, children);

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter not(Filter filter) {


        try {

            Filter.CompositeFilter var3;
            Filter.CompositeFilter var4 = var3 = new Filter.CompositeFilter(Filter.BooleanOperation.NOT, new Filter[]{filter});

            return var3;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public static Filter ignoreCase(Filter filter) {


        try {

            if (filter instanceof Filter.LeafFilter) {
                ((Filter.LeafFilter)filter)._ignoreCase = true;
            }


            return filter;
        } catch (Throwable var6) {

            throw var6;
        }
    }

    public abstract void accept(Filter.FilterVisitor var1) throws GeneralException;

    public abstract String getExpression();

    public String getExpression(boolean readable) {


        try {

            String exp = this.getExpression();
            String var10000;
            String var7;
            if (!readable) {
                var10000 = var7 = exp;
            } else {
                try {
                    exp = Util.decodeJavaIdentifier(exp);
                } catch (sailpoint.tools.Util.ParseException var10) {
                    String msg = exp + " could not be decoded: " + var10.getMessage();
                    if (log.isDebugEnabled()) {
                        log.debug(msg, var10);
                    } else {
                        log.warn(msg);
                    }
                }

                var10000 = var7 = exp;
            }

            String var8 = var10000;

            return var7;
        } catch (Throwable var11) {

            throw var11;
        }
    }

    public boolean equals(Object o) {


        try {

            boolean var4;
            boolean var5 = this == o ? (var4 = true) : (!(o instanceof Filter) ? (var4 = false) : (var4 = this.getExpression().equals(((Filter)o).getExpression())));

            return var4;
        } catch (Throwable var7) {

            throw var7;
        }
    }

    public boolean contentEquals(Filter other) {


        try {

            boolean var4;
            boolean var5 = var4 = this.equals(other);

            return var4;
        } catch (Throwable var7) {

            throw var7;
        }
    }

    public int hashCode() {


        try {

            int var2;
            int var3 = var2 = this.getExpression().hashCode();

            return var2;
        } catch (Throwable var5) {

            throw var5;
        }
    }

    static {



        try {
            COLLECTION_NOT_ALLOWED_MESSAGE = Util.getMessage(Util.getIIQMessages(Locale.getDefault()), "filter_collection_invalid_in_context");
            log = LogFactory.getLog(Filter.class);
        } catch (Throwable var1) {
            if (var1 instanceof ExceptionInInitializerError) {
                throw (ExceptionInInitializerError)var1;
            }


            throw var1;
        }


    }

    public static class FilterCompiler {
        private Parser p;

        public FilterCompiler() {


            try {


            } catch (Throwable var3) {

                throw var3;
            }
        }

        public Filter compileFilter(String filter) throws ParseException {


            try {

                this.p = new Parser(filter);
                Filter filterObj = this.compileFilter();
                if (!this.p.parseEOS()) {
                    throw new ParseException("Expected end-of-string", this.p);
                } else {

                    return filterObj;
                }
            } catch (Throwable var8) {

                throw var8;
            }
        }

        private Filter compileFilter() {


            try {

                Filter var2;
                Filter var3 = var2 = this.compileConditionalOrFilter();

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        private Filter compileConditionalOrFilter() {


            try {

                Filter filter = this.compileConditionalAndFilter();
                List filters = new ArrayList();
                filters.add(filter);

                while(this.p.parseString("||")) {
                    filters.add(this.compileConditionalAndFilter());
                }

                if (filters.size() > 1) {
                    filter = Filter.or((List)filters);
                }


                return filter;
            } catch (Throwable var7) {

                throw var7;
            }
        }

        private Filter compileConditionalAndFilter() {


            try {

                Filter filter = this.compileNotFilter();
                List filters = new ArrayList();
                filters.add(filter);

                while(this.p.parseString("&&")) {
                    filters.add(this.compileNotFilter());
                }

                if (filters.size() > 1) {
                    filter = Filter.and((List)filters);
                }


                return filter;
            } catch (Throwable var7) {

                throw var7;
            }
        }

        private Filter compileNotFilter() {


            try {

                Filter filter;
                if (this.p.parseChar('!')) {
                    filter = Filter.not(this.compilePrimary());
                } else {
                    filter = this.compilePrimary();
                }


                return filter;
            } catch (Throwable var6) {

                throw var6;
            }
        }

        private Filter compilePrimary() {


            try {

                Filter filter = null;
                Object var7;
                Filter filter;
                Object var10000;
                if (this.p.parseChar('(')) {
                    filter = this.compileFilter();
                    if (!this.p.parseChar(')')) {
                        throw new ParseException("Expected ')'", this.p);
                    }

                    var10000 = var7 = filter;
                } else {
                    label146: {
                        Filter.FilterCompiler.IdentitiferLookAhead lookAhead = new Filter.FilterCompiler.IdentitiferLookAhead();
                        String property = this.p.parseIdentifier(true, lookAhead);
                        if (null == property) {
                            throw new ParseException("Expected either a parenthetical grouping or comparison.", this.p);
                        }

                        String identifier;
                        for(property = Util.decodeJavaIdentifier(property); this.p.parseChar('.'); property = property + "." + identifier) {
                            identifier = this.p.parseIdentifier(true, lookAhead);
                            if (null == identifier) {
                                throw new ParseException("Expected identifier after '.'", this.p);
                            }

                            identifier = Util.decodeJavaIdentifier(identifier);
                            if (this.p.parseChar('(')) {
                                if ("startsWith".equals(identifier)) {
                                    filter = this.compileMatchingFilter(property, Filter.MatchMode.START);
                                } else if ("startsWithIgnoreCase".equals(identifier)) {
                                    filter = Filter.ignoreCase(this.compileMatchingFilter(property, Filter.MatchMode.START));
                                } else if ("endsWith".equals(identifier)) {
                                    filter = this.compileMatchingFilter(property, Filter.MatchMode.END);
                                } else if ("endsWithIgnoreCase".equals(identifier)) {
                                    filter = Filter.ignoreCase(this.compileMatchingFilter(property, Filter.MatchMode.END));
                                } else if ("contains".equals(identifier)) {
                                    filter = this.compileMatchingFilter(property, Filter.MatchMode.ANYWHERE);
                                } else if ("containsIgnoreCase".equals(identifier)) {
                                    filter = Filter.ignoreCase(this.compileMatchingFilter(property, Filter.MatchMode.ANYWHERE));
                                } else if ("in".equals(identifier)) {
                                    filter = this.compileInFilter(property);
                                } else if ("inIgnoreCase".equals(identifier)) {
                                    filter = Filter.ignoreCase(this.compileInFilter(property));
                                } else if ("containsAll".equals(identifier)) {
                                    filter = this.compileContainmentFilter(property, Filter.LogicalOperation.CONTAINS_ALL);
                                } else if ("containsAllIgnoreCase".equals(identifier)) {
                                    filter = Filter.ignoreCase(this.compileContainmentFilter(property, Filter.LogicalOperation.CONTAINS_ALL));
                                } else if ("join".equals(identifier)) {
                                    filter = this.compileJoin(property);
                                } else if ("leftJoin".equals(identifier)) {
                                    filter = this.compileLeftJoin(property);
                                } else if ("isNull".equals(identifier)) {
                                    filter = Filter.isnull(property);
                                } else if ("notNull".equals(identifier)) {
                                    filter = Filter.notnull(property);
                                } else if ("isEmpty".equals(identifier)) {
                                    filter = Filter.isempty(property);
                                } else if ("collectionCondition".equals(identifier)) {
                                    filter = this.compileCollectionCondition(property);
                                } else {
                                    if (!"subquery".equals(identifier)) {
                                        throw new ParseException("Unknown function: " + identifier, this.p);
                                    }

                                    filter = this.compileSubquery(property);
                                }

                                if (!this.p.parseChar(')')) {
                                    throw new ParseException("Expected ')' after function.", this.p);
                                }

                                var10000 = var7 = filter;
                                break label146;
                            }
                        }

                        Filter.LogicalOperation op = null;
                        boolean ignoreCase = false;
                        if (this.p.parseString("==")) {
                            op = Filter.LogicalOperation.EQ;
                        } else if (this.p.parseString("!=")) {
                            op = Filter.LogicalOperation.NE;
                        } else if (this.p.parseString(">=")) {
                            op = Filter.LogicalOperation.GE;
                        } else if (this.p.parseString("<=")) {
                            op = Filter.LogicalOperation.LE;
                        } else if (this.p.parseString(">")) {
                            op = Filter.LogicalOperation.GT;
                        } else if (this.p.parseString("<")) {
                            op = Filter.LogicalOperation.LT;
                        } else if (this.p.parseString("i==")) {
                            op = Filter.LogicalOperation.EQ;
                            ignoreCase = true;
                        } else if (this.p.parseString("i!=")) {
                            op = Filter.LogicalOperation.NE;
                            ignoreCase = true;
                        } else if (this.p.parseString("i>=")) {
                            op = Filter.LogicalOperation.GE;
                            ignoreCase = true;
                        } else if (this.p.parseString("i<=")) {
                            op = Filter.LogicalOperation.LE;
                            ignoreCase = true;
                        } else if (this.p.parseString("i>")) {
                            op = Filter.LogicalOperation.GT;
                            ignoreCase = true;
                        } else if (this.p.parseString("i<")) {
                            op = Filter.LogicalOperation.LT;
                            ignoreCase = true;
                        } else if (null == (filter = this.compileLegacyUnaryOperation(property))) {
                            throw new ParseException("Expected operator", this.p);
                        }

                        if (null == filter) {
                            filter = new Filter.LeafFilter(op, property, this.compileLiteral());
                            if (ignoreCase) {
                                filter = Filter.ignoreCase((Filter)filter);
                            }
                        }

                        var10000 = var7 = filter;
                    }
                }

                Object var8 = var10000;

                return (Filter)var7;
            } catch (Throwable var10) {

                throw var10;
            }
        }

        private Filter compileLegacyUnaryOperation(String property) {


            try {

                Filter.LogicalOperation op = null;
                if (this.p.parseString("ISEMPTY")) {
                    op = Filter.LogicalOperation.ISEMPTY;
                } else if (this.p.parseString("ISNULL")) {
                    op = Filter.LogicalOperation.ISNULL;
                } else if (this.p.parseString("NOTNULL")) {
                    op = Filter.LogicalOperation.NOTNULL;
                }

                Filter.LeafFilter var10000 = null != op ? new Filter.LeafFilter(op, property, (Object)null) : null;
                Filter.LeafFilter var5 = var10000;
                Filter.LeafFilter var6 = var10000;

                return var5;
            } catch (Throwable var8) {

                throw var8;
            }
        }

        private Object compileLiteral() {


            try {

                Object var10000;
                Object literal;
                Object var3;
                if ((literal = this.p.parseLiteral()) != null) {
                    var10000 = var3 = literal;
                } else {
                    List literal;
                    if ((literal = this.compileArrayLiteral(false)) != null) {
                        var10000 = var3 = literal;
                    } else {
                        if (!this.p.parseNullLiteral()) {
                            throw new ParseException("Expected literal value.", this.p);
                        }

                        var10000 = var3 = null;
                    }
                }

                Object var4 = var10000;

                return var3;
            } catch (Throwable var6) {

                throw var6;
            }
        }

        private Filter compileMatchingFilter(String property, Filter.MatchMode mode) {


            try {

                Filter.LeafFilter var6;
                Filter.LeafFilter var7 = var6 = new Filter.LeafFilter(Filter.LogicalOperation.LIKE, property, this.compileLiteral(), mode);

                return var6;
            } catch (Throwable var9) {

                throw var9;
            }
        }

        private Filter compileContainmentFilter(String property, Filter.LogicalOperation op) {


            try {

                Filter.LeafFilter var6;
                Filter.LeafFilter var7 = var6 = new Filter.LeafFilter(op, property, this.compileArrayLiteral(true));

                return var6;
            } catch (Throwable var9) {

                throw var9;
            }
        }

        private Filter compileInFilter(String property) {


            try {

                Filter var4;
                Filter var5 = var4 = Filter.in(property, this.compileArrayLiteral(true));

                return var4;
            } catch (Throwable var7) {

                throw var7;
            }
        }

        private List compileArrayLiteral(boolean failIfNotFound) {


            try {

                List list = new ArrayList();
                ArrayList var10000;
                ArrayList var5;
                if (!this.p.parseChar('{')) {
                    if (failIfNotFound) {
                        throw new ParseException("Expected '{' to start array literal.", this.p);
                    }

                    var10000 = var5 = null;
                } else {
                    if (!this.p.parseChar('}')) {
                        do {
                            list.add(this.compileLiteral());
                        } while(this.p.parseChar(','));

                        if (!this.p.parseChar('}')) {
                            throw new ParseException("Expected '}' to end array literal.", this.p);
                        }
                    }

                    var10000 = var5 = list;
                }

                ArrayList var6 = var10000;

                return var5;
            } catch (Throwable var8) {

                throw var8;
            }
        }

        private Filter compileJoin(String property) {


            try {

                String joinProperty = this.compileDottedClassIdentifier();
                Filter var5;
                Filter var6 = var5 = Filter.join(property, joinProperty);

                return var5;
            } catch (Throwable var8) {

                throw var8;
            }
        }

        private Filter compileLeftJoin(String property) {


            try {

                String joinProperty = this.compileDottedClassIdentifier();
                Filter var5;
                Filter var6 = var5 = Filter.leftJoin(property, joinProperty);

                return var5;
            } catch (Throwable var8) {

                throw var8;
            }
        }

        private String compileDottedClassIdentifier() {


            try {

                String val = this.p.parseDottedClassIdentifier();
                if (null == val) {
                    throw new ParseException("Expected a dotted class identifier.", this.p);
                } else {
                    String var3;
                    String var4 = var3 = Util.decodeJavaIdentifier(val);

                    return var3;
                }
            } catch (Throwable var6) {

                throw var6;
            }
        }

        private Filter compileCollectionCondition(String property) {


            try {

                String conditionString = this.p.parseStringLiteral();
                if (null == conditionString) {
                    throw new ParseException("Expected a collection condition string.", this.p);
                } else {
                    Filter collectionCond = Filter.compile(conditionString);
                    collectionCond = this.expandCollapsedComposite(collectionCond, conditionString);
                    if (collectionCond instanceof Filter.LeafFilter) {
                        collectionCond = Filter.and(collectionCond);
                    }

                    Filter var6;
                    Filter var7 = var6 = Filter.collectionCondition(property, collectionCond);

                    return var6;
                }
            } catch (Throwable var9) {

                throw var9;
            }
        }

        private Filter expandCollapsedComposite(Filter collectionCond, String conditionString) {


            try {

                Filter filter = collectionCond;
                if (conditionString.startsWith("((") && collectionCond instanceof Filter.CompositeFilter) {
                    filter = Filter.and(collectionCond);
                }


                return filter;
            } catch (Throwable var10) {

                throw var10;
            }
        }

        private Filter compileSubquery(String property) {


            try {

                Class clazz = this.p.parseFullyQualifiedClass();
                if (null == clazz) {
                    throw new ParseException("Expected a full qualified class.", this.p);
                } else if (!this.p.parseChar(',')) {
                    throw new ParseException("Expected a comma between class name and subquery property.", this.p);
                } else {
                    String subqueryProperty = this.p.parseStringLiteral();
                    if (null == subqueryProperty) {
                        throw new ParseException("Expected a subquery property.", this.p);
                    } else if (!this.p.parseChar(',')) {
                        throw new ParseException("Expected a comma between subquery property and subquery filter.", this.p);
                    } else {
                        String subqueryString = this.p.parseStringLiteral();
                        if (null == subqueryString && !this.p.parseNullLiteral()) {
                            throw new ParseException("Expected a subquery filter string or null.", this.p);
                        } else {
                            Filter subfilter = null;
                            if (null != subqueryString) {
                                subfilter = Filter.compile(subqueryString);
                            }

                            Filter var8;
                            Filter var9 = var8 = Filter.subquery(property, clazz, subqueryProperty, subfilter);

                            return var8;
                        }
                    }
                }
            } catch (Throwable var11) {

                throw var11;
            }
        }

        static {



        }

        public static class IdentitiferLookAhead extends BaseLookAhead {
            private static final String[] OPERATORS;

            public IdentitiferLookAhead() {


                try {


                } catch (Throwable var3) {

                    throw var3;
                }
            }

            public boolean isAmbiguous(char c) {


                try {

                    boolean var4;
                    boolean var5 = var4 = ' ' == c;

                    return var4;
                } catch (Throwable var7) {

                    throw var7;
                }
            }

            public boolean continueParsingInternal(Parser p) {


                try {

                    boolean var10000;
                    boolean var5;
                    if (!p.parseChar('.') && !p.parseChar('(')) {
                        int i = 0;

                        while(true) {
                            if (i >= OPERATORS.length) {
                                var10000 = var5 = true;
                                break;
                            }

                            if (p.parseString(OPERATORS[i])) {
                                var10000 = var5 = false;
                                break;
                            }

                            ++i;
                        }
                    } else {
                        var10000 = var5 = false;
                    }

                    boolean var6 = var10000;

                    return var5;
                } catch (Throwable var8) {

                    throw var8;
                }
            }

            static {



                try {
                    OPERATORS = new String[]{"==", ">", "<", "!=", "i==", "i>", "i<", "i!=", "ISEMPTY", "ISNULL", "NOTNULL"};
                } catch (Throwable var1) {
                    if (var1 instanceof ExceptionInInitializerError) {
                        throw (ExceptionInInitializerError)var1;
                    }


                    throw var1;
                }


            }
        }
    }

    @Untraced
    static class FilterToExpressionVisitor extends Filter.BaseFilterVisitor {
        static final String DATE_PREFIX = "DATE$";
        private StringBuilder builder = new StringBuilder();

        public FilterToExpressionVisitor() {
        }

        public String getExpression() {
            return this.builder.toString();
        }

        public void visitAnd(Filter.CompositeFilter filter) throws GeneralException {
            this.visitComposite(filter);
        }

        public void visitOr(Filter.CompositeFilter filter) throws GeneralException {
            this.visitComposite(filter);
        }

        private void visitComposite(Filter.CompositeFilter filter) throws GeneralException {
            List<Filter> children = filter.getChildren();
            if (null != children && !children.isEmpty()) {
                this.builder.append('(');
                String sep = "";

                for(Iterator var4 = children.iterator(); var4.hasNext(); sep = " " + filter.getOperation().getStringRepresentation() + " ") {
                    Filter f = (Filter)var4.next();
                    this.builder.append(sep);
                    f.accept(this);
                }

                this.builder.append(')');
            }

        }

        public void visitNot(Filter.CompositeFilter filter) throws GeneralException {
            List<Filter> children = filter.getChildren();
            if (null != children && 1 == children.size()) {
                this.builder.append('!');
                int idx = this.builder.length();
                ((Filter)children.get(0)).accept(this);
                if ('(' != this.builder.charAt(idx)) {
                    this.builder.insert(idx, '(');
                    this.builder.append(')');
                }

            } else {
                throw new GeneralException("NOT condition must have a single child.");
            }
        }

        public void visitEQ(Filter.LeafFilter filter) {
            this.visitComparisonOp(filter);
        }

        public void visitNE(Filter.LeafFilter filter) {
            this.visitComparisonOp(filter);
        }

        public void visitLT(Filter.LeafFilter filter) {
            this.visitComparisonOp(filter);
        }

        public void visitGT(Filter.LeafFilter filter) {
            this.visitComparisonOp(filter);
        }

        public void visitLE(Filter.LeafFilter filter) {
            this.visitComparisonOp(filter);
        }

        public void visitGE(Filter.LeafFilter filter) {
            this.visitComparisonOp(filter);
        }

        public void visitNotNull(Filter.LeafFilter filter) {
            this.visitUnaryOp(filter);
        }

        public void visitIsNull(Filter.LeafFilter filter) {
            this.visitUnaryOp(filter);
        }

        public void visitIsEmpty(Filter.LeafFilter filter) {
            this.visitUnaryOp(filter);
        }

        private void visitComparisonOp(Filter.LeafFilter filter) {
            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty())).append(' ');
            if (filter.isIgnoreCase()) {
                this.builder.append('i');
            }

            this.builder.append(filter.getOperation().getStringRepresentation());
            this.builder.append(' ').append(valueToString(filter.getValue()));
        }

        private void visitUnaryOp(Filter.LeafFilter filter) {
            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty())).append('.');
            String op = null;
            switch(filter.getOperation()) {
                case NOTNULL:
                    op = "notNull()";
                    break;
                case ISNULL:
                    op = "isNull()";
                    break;
                case ISEMPTY:
                    op = "isEmpty()";
                    break;
                default:
                    throw new RuntimeException("Unexpected unary operation: " + filter.getOperation());
            }

            this.builder.append(op);
        }

        private static Object valueToString(Object o) {
            int lastDollar;
            if (!(o instanceof String)) {
                StringBuffer buf;
                if (o instanceof Enum) {
                    buf = new StringBuffer();
                    buf.append(o.getClass().getName());
                    lastDollar = buf.lastIndexOf("$");
                    if (lastDollar > -1 && buf.length() >= lastDollar + 1) {
                        boolean stripIt = false;
                        String rest = buf.substring(lastDollar + 1);

                        try {
                            Integer.parseInt(rest);
                            stripIt = true;
                        } catch (NumberFormatException var6) {
                        }

                        if (stripIt) {
                            buf.setLength(lastDollar);
                        }
                    }

                    int replaceChar = buf.indexOf("$");
                    buf.replace(replaceChar, replaceChar + 1, ".");
                    buf.append(".");
                    buf.append(o.toString());
                    o = buf.toString();
                } else if (o instanceof Date) {
                    buf = new StringBuffer("DATE$");
                    buf.append(((Date)o).getTime());
                    o = buf.toString();
                }

                return o;
            } else {
                StringBuilder sb = new StringBuilder((String)o);

                for(lastDollar = 0; lastDollar < sb.length(); ++lastDollar) {
                    char c = sb.charAt(lastDollar);
                    if ('"' == c || '\\' == c) {
                        sb.insert(lastDollar, '\\');
                        ++lastDollar;
                    }
                }

                return "\"" + sb.toString() + "\"";
            }
        }

        public void visitLike(Filter.LeafFilter filter) {
            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty()));
            switch(filter.getMatchMode()) {
                case START:
                    this.builder.append(".startsWith");
                    break;
                case END:
                    this.builder.append(".endsWith");
                    break;
                case ANYWHERE:
                    this.builder.append(".contains");
            }

            if (filter.isIgnoreCase()) {
                this.builder.append("IgnoreCase");
            }

            this.builder.append("(").append(valueToString(filter.getValue())).append(")");
        }

        public void visitIn(Filter.LeafFilter filter) {
            this.visitListFilter(filter);
        }

        public void visitContainsAll(Filter.LeafFilter filter) {
            this.visitListFilter(filter);
        }

        private void visitListFilter(Filter.LeafFilter filter) {
            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty()));
            Object value = filter.getValue();
            if (!(value instanceof Iterable) && !(value instanceof Object[])) {
                throw new RuntimeException("An 'in' filter must have an array or collection value.");
            } else {
                if (Filter.LogicalOperation.IN.equals(filter.getOperation())) {
                    this.builder.append(".in");
                } else {
                    this.builder.append(".containsAll");
                }

                if (filter.isIgnoreCase()) {
                    this.builder.append("IgnoreCase");
                }

                this.builder.append("({");
                String sep = "";
                if (value instanceof Iterable) {
                    for(Iterator var4 = ((Iterable)value).iterator(); var4.hasNext(); sep = ", ") {
                        Object current = var4.next();
                        this.builder.append(sep);
                        this.builder.append(valueToString(current));
                    }
                } else if (value instanceof Object[]) {
                    Object[] var8 = (Object[])((Object[])value);
                    int var9 = var8.length;

                    for(int var6 = 0; var6 < var9; ++var6) {
                        Object current = var8[var6];
                        this.builder.append(sep);
                        this.builder.append(valueToString(current));
                        sep = ", ";
                    }
                }

                this.builder.append("})");
            }
        }

        public void visitJoin(Filter.LeafFilter filter) {
            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty()));
            this.builder.append(".join(");
            this.builder.append(Util.encodeJavaIdentifier(filter.getJoinProperty()));
            this.builder.append(")");
        }

        public void visitLeftJoin(Filter.LeafFilter filter) {
            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty()));
            this.builder.append(".leftJoin(");
            this.builder.append(Util.encodeJavaIdentifier(filter.getJoinProperty()));
            this.builder.append(")");
        }

        public void visitCollectionCondition(Filter.LeafFilter filter) {
            String conditionExpression = filter.getCollectionCondition().getExpression();
            conditionExpression = conditionExpression.replace("\"", "\\\"");
            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty()));
            this.builder.append(".collectionCondition(\"");
            this.builder.append(conditionExpression);
            this.builder.append("\")");
        }

        public void visitSubquery(Filter.LeafFilter filter) {
            Filter subfilter = filter.getSubqueryFilter();
            String subquery = null != subfilter ? subfilter.getExpression() : null;
            if (null != subquery) {
                subquery = subquery.replace("\"", "\\\"");
            }

            this.builder.append(Util.encodeJavaIdentifier(filter.getProperty()));
            this.builder.append(".subquery(");
            this.builder.append(Util.encodeJavaIdentifier(filter.getSubqueryClass().getName()));
            this.builder.append(", \"");
            this.builder.append(Util.encodeJavaIdentifier(filter.getSubqueryProperty()));
            this.builder.append("\", ");
            if (null != subquery) {
                this.builder.append("\"").append(subquery).append("\"");
            } else {
                this.builder.append("null");
            }

            this.builder.append(")");
        }
    }

    public static class BaseFilterVisitor implements Filter.FilterVisitor {
        public BaseFilterVisitor() {


            try {


            } catch (Throwable var3) {

                throw var3;
            }
        }

        void throwUnsupported(Filter filter) throws GeneralException {


            try {

                throw new GeneralException("Filter " + filter.getExpression() + " not supported");
            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitAnd(Filter.CompositeFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitOr(Filter.CompositeFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitNot(Filter.CompositeFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitEQ(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitNE(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitLT(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitGT(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitLE(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitGE(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitIn(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitContainsAll(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitLike(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitNotNull(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitIsNull(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitIsEmpty(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitJoin(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitLeftJoin(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitCollectionCondition(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void visitSubquery(Filter.LeafFilter filter) throws GeneralException {


            try {

                this.throwUnsupported(filter);
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        static {



        }
    }

    public interface FilterVisitor {
        void visitAnd(Filter.CompositeFilter var1) throws GeneralException;

        void visitOr(Filter.CompositeFilter var1) throws GeneralException;

        void visitNot(Filter.CompositeFilter var1) throws GeneralException;

        void visitEQ(Filter.LeafFilter var1) throws GeneralException;

        void visitNE(Filter.LeafFilter var1) throws GeneralException;

        void visitLT(Filter.LeafFilter var1) throws GeneralException;

        void visitGT(Filter.LeafFilter var1) throws GeneralException;

        void visitLE(Filter.LeafFilter var1) throws GeneralException;

        void visitGE(Filter.LeafFilter var1) throws GeneralException;

        void visitIn(Filter.LeafFilter var1) throws GeneralException;

        void visitContainsAll(Filter.LeafFilter var1) throws GeneralException;

        void visitLike(Filter.LeafFilter var1) throws GeneralException;

        void visitNotNull(Filter.LeafFilter var1) throws GeneralException;

        void visitIsNull(Filter.LeafFilter var1) throws GeneralException;

        void visitIsEmpty(Filter.LeafFilter var1) throws GeneralException;

        void visitJoin(Filter.LeafFilter var1) throws GeneralException;

        void visitLeftJoin(Filter.LeafFilter var1) throws GeneralException;

        void visitCollectionCondition(Filter.LeafFilter var1) throws GeneralException;

        void visitSubquery(Filter.LeafFilter var1) throws GeneralException;
    }

    @XMLClass
    public static class CompositeFilter extends Filter {
        private static final long serialVersionUID = -2222994052543435736L;
        private Filter.BooleanOperation _operation;
        private List<Filter> _children;

        public CompositeFilter() {


            try {


            } catch (Throwable var3) {

                throw var3;
            }
        }

        public CompositeFilter(Filter.BooleanOperation operation, Filter... children) {


            try {

                this._operation = operation;
                this._children = null;
                if (children != null) {
                    this._children = Arrays.asList(children);
                    this._children = new ArrayList(this._children);
                }


            } catch (Throwable var7) {

                throw var7;
            }
        }

        public CompositeFilter(Filter.BooleanOperation operation, List<Filter> children) {


            try {

                this._operation = operation;
                this._children = children;

            } catch (Throwable var7) {

                throw var7;
            }
        }

        public CompositeFilter(Filter.CompositeFilter src) {


            try {

                this._operation = src._operation;
                if (src._children != null) {
                    this._children = new ArrayList();
                    Iterator var2 = src._children.iterator();

                    while(var2.hasNext()) {
                        Filter child = (Filter)var2.next();
                        this._children.add(Filter.clone(child));
                    }
                }


            } catch (Throwable var7) {

                throw var7;
            }
        }

        @XMLProperty
        public Filter.BooleanOperation getOperation() {


            try {

                Filter.BooleanOperation var2;
                Filter.BooleanOperation var3 = var2 = this._operation;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setOperation(Filter.BooleanOperation op) {


            try {

                this._operation = op;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty(
                mode = SerializationMode.INLINE_LIST_UNQUALIFIED
        )
        public List<Filter> getChildren() {


            try {

                List var2;
                List var3 = var2 = this._children;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setChildren(List<Filter> children) {


            try {

                this._children = children;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public void add(Filter child) {


            try {

                if (child != null) {
                    if (this._children == null) {
                        this._children = new ArrayList();
                    }

                    this._children.add(child);
                }

                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public String toString() {
            return this.getExpression();
        }

        public String getExpression() {


            try {

                Filter.FilterToExpressionVisitor ftsh = new Filter.FilterToExpressionVisitor();

                try {
                    this.accept(ftsh);
                } catch (GeneralException var7) {
                    throw new RuntimeException(var7);
                }

                String var4;
                String var5 = var4 = ftsh.getExpression();

                return var4;
            } catch (Throwable var8) {

                throw var8;
            }
        }

        public void accept(Filter.FilterVisitor visitor) throws GeneralException {


            try {

                switch(this.getOperation()) {
                    case AND:
                        visitor.visitAnd(this);
                        break;
                    case OR:
                        visitor.visitOr(this);
                        break;
                    case NOT:
                        visitor.visitNot(this);
                        break;
                    default:
                        throw new GeneralException("Unknown type of composite filter: " + this);
                }

                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        static {



        }
    }

    @XMLClass(
            xmlname = "Filter"
    )
    public static class LeafFilter extends Filter {
        private static final long serialVersionUID = -1035650760835459534L;
        private Filter.LogicalOperation _operation;
        private Filter.MatchMode _matchMode;
        private String _property;
        private Object _value;
        private boolean _ignoreCase;
        private String _joinProperty;
        private Filter.CompositeFilter _collectionCondition;
        private String _cast;
        private Filter _subqueryFilter;
        private String _subqueryProperty;
        private Class<?> _subqueryClass;

        public LeafFilter() {


            try {


            } catch (Throwable var3) {

                throw var3;
            }
        }

        public LeafFilter(Filter.LogicalOperation operation, String property) {
            this(operation, property, (Object)null);


            try {


            } catch (Throwable var7) {

                throw var7;
            }
        }

        public LeafFilter(Filter.LogicalOperation operation, String property, Object value) {
            this(operation, property, value, (Filter.MatchMode)null);

            Object[] var5 = new Object[]{operation, property, value};
            JoinPoint var4 = Factory.makeJP(var10000, this, this, var5);

            try {


            } catch (Throwable var10) {

                throw var10;
            }
        }

        public LeafFilter(Filter.LogicalOperation operation, String property, Object value, Filter.MatchMode matchMode) {

            Object[] var6 = new Object[]{operation, property, value, matchMode};
            JoinPoint var5 = Factory.makeJP(var10000, this, this, var6);

            try {

                this._operation = operation;
                this._property = property;
                this._value = value;
                this._matchMode = matchMode;

            } catch (Throwable var12) {

                throw var12;
            }
        }

        public LeafFilter(String property, Filter.CompositeFilter collectionCondition) {


            try {

                this._operation = Filter.LogicalOperation.COLLECTION_CONDITION;
                this._property = property;
                this._collectionCondition = collectionCondition;

            } catch (Throwable var7) {

                throw var7;
            }
        }

        public LeafFilter(Filter.LogicalOperation operation, String property, Class<?> subqueryClass, String subqueryProperty, Filter subqueryFilter) {

            Object[] var7 = new Object[]{operation, property, subqueryClass, subqueryProperty, subqueryFilter};
            JoinPoint var6 = Factory.makeJP(var10000, this, this, var7);

            try {

                if (null != property && null != subqueryProperty && null != subqueryClass) {
                    this._operation = operation;
                    this._property = property;
                    this._subqueryClass = subqueryClass;
                    this._subqueryProperty = subqueryProperty;
                    this._subqueryFilter = subqueryFilter;

                } else {
                    throw new IllegalArgumentException("Property, subquery property, and class are required");
                }
            } catch (Throwable var14) {

                throw var14;
            }
        }

        public LeafFilter(Filter.LeafFilter src) {


            try {

                this._operation = src._operation;
                this._matchMode = src._matchMode;
                this._property = src._property;
                this._value = src._value;
                this._ignoreCase = src._ignoreCase;
                this._joinProperty = src._joinProperty;
                this._collectionCondition = src._collectionCondition;
                this._cast = src._cast;
                this._subqueryClass = src._subqueryClass;
                this._subqueryProperty = src._subqueryProperty;
                this._subqueryFilter = src._subqueryFilter;

            } catch (Throwable var5) {

                throw var5;
            }
        }

        @XMLProperty
        public Filter.LogicalOperation getOperation() {


            try {

                Filter.LogicalOperation var2;
                Filter.LogicalOperation var3 = var2 = this._operation;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setOperation(Filter.LogicalOperation op) {


            try {

                this._operation = op;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty
        public Filter.MatchMode getMatchMode() {


            try {

                Filter.MatchMode var2;
                Filter.MatchMode var3 = var2 = this._matchMode;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setMatchMode(Filter.MatchMode mm) {


            try {

                this._matchMode = mm;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public String getMatchModeString(String value, String wild) {


            try {

                Filter.MatchMode mm = this._matchMode != null ? this._matchMode : Filter.MatchMode.ANYWHERE;
                String var7;
                String var8 = var7 = mm.toMatchString(value, wild);

                return var7;
            } catch (Throwable var10) {

                throw var10;
            }
        }

        @XMLProperty
        public String getProperty() {


            try {

                String var2;
                String var3 = var2 = this._property;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setProperty(String property) {


            try {

                this._property = property;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty
        public String getJoinProperty() {


            try {

                String var2;
                String var3 = var2 = this._joinProperty;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setJoinProperty(String joinProperty) {


            try {

                this._joinProperty = joinProperty;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public Object getValue() {


            try {

                Object var2;
                Object var3 = var2 = this._value;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setValue(Object val) {


            try {

                this._value = val;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public String getCast() {


            try {

                String var2;
                String var3 = var2 = this._cast;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setCast(String _cast) {


            try {

                this._cast = _cast;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty(
                mode = SerializationMode.ATTRIBUTE,
                xmlname = "value"
        )
        public String getValueXMLAttribute() {


            try {

                String var10000 = this._value instanceof String ? (String)this._value : null;
                String var2 = var10000;
                String var3 = var10000;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setValueXMLAttribute(String value) {


            try {

                this._value = value;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty(
                xmlname = "Value"
        )
        public Object getValueXMLElement() {


            try {

                Object var10000 = this._value instanceof String ? null : this._value;
                Object var2 = var10000;
                Object var3 = var10000;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setValueXMLElement(Object value) {


            try {

                if (this._value == null) {
                    this._value = value;
                }

                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty
        public boolean isIgnoreCase() {


            try {

                boolean var2;
                boolean var3 = var2 = this._ignoreCase;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setIgnoreCase(boolean ignoreCase) {


            try {

                this._ignoreCase = ignoreCase;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty
        public Filter.CompositeFilter getCollectionCondition() {


            try {

                Filter.CompositeFilter var2;
                Filter.CompositeFilter var3 = var2 = this._collectionCondition;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setCollectionCondition(Filter.CompositeFilter filter) {


            try {

                this._collectionCondition = filter;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty
        public Class<?> getSubqueryClass() {


            try {

                Class var2;
                Class var3 = var2 = this._subqueryClass;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setSubqueryClass(Class<?> clazz) {


            try {

                this._subqueryClass = clazz;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty
        public String getSubqueryProperty() {


            try {

                String var2;
                String var3 = var2 = this._subqueryProperty;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setSubqueryProperty(String property) {


            try {

                this._subqueryProperty = property;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        @XMLProperty
        public Filter getSubqueryFilter() {


            try {

                Filter var2;
                Filter var3 = var2 = this._subqueryFilter;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public void setSubqueryFilter(Filter filter) {


            try {

                this._subqueryFilter = filter;
                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        public String toString() {
            return this.getExpression();
        }

        public String getExpression() {


            try {

                Filter.FilterToExpressionVisitor ftsh = new Filter.FilterToExpressionVisitor();

                try {
                    this.accept(ftsh);
                } catch (GeneralException var7) {
                    throw new RuntimeException(var7);
                }

                String var4;
                String var5 = var4 = ftsh.getExpression();

                return var4;
            } catch (Throwable var8) {

                throw var8;
            }
        }

        public void accept(Filter.FilterVisitor visitor) throws GeneralException {


            try {

                if (null != this._subqueryClass) {
                    visitor.visitSubquery(this);
                } else {
                    switch(this.getOperation()) {
                        case EQ:
                            visitor.visitEQ(this);
                            break;
                        case NE:
                            visitor.visitNE(this);
                            break;
                        case LT:
                            visitor.visitLT(this);
                            break;
                        case GT:
                            visitor.visitGT(this);
                            break;
                        case LE:
                            visitor.visitLE(this);
                            break;
                        case GE:
                            visitor.visitGE(this);
                            break;
                        case IN:
                            visitor.visitIn(this);
                            break;
                        case CONTAINS_ALL:
                            visitor.visitContainsAll(this);
                            break;
                        case LIKE:
                            visitor.visitLike(this);
                            break;
                        case NOTNULL:
                            visitor.visitNotNull(this);
                            break;
                        case ISNULL:
                            visitor.visitIsNull(this);
                            break;
                        case ISEMPTY:
                            visitor.visitIsEmpty(this);
                            break;
                        case JOIN:
                            visitor.visitJoin(this);
                            break;
                        case LEFT_JOIN:
                            visitor.visitLeftJoin(this);
                            break;
                        case COLLECTION_CONDITION:
                            visitor.visitCollectionCondition(this);
                            break;
                        default:
                            throw new GeneralException("Unknown type of this filter: " + this);
                    }
                }

                Object var4 = null;

            } catch (Throwable var6) {

                throw var6;
            }
        }

        static {



        }
    }

    @XMLClass
    public static enum BooleanOperation {
        NOT,
        AND,
        OR;

        private String stringRepresentation;

        private BooleanOperation(String stringRepresentation) {

            Object[] var5 = new Object[]{var1, Conversions.intObject(var2), stringRepresentation};
            JoinPoint var4 = Factory.makeJP(var10000, this, this, var5);

            try {

                this.stringRepresentation = stringRepresentation;

            } catch (Throwable var10) {

                throw var10;
            }
        }

        String getStringRepresentation() {


            try {

                String var2;
                String var3 = var2 = this.stringRepresentation;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        static {



            try {
                NOT = new Filter.BooleanOperation("NOT", 0, "!");
                AND = new Filter.BooleanOperation("AND", 1, "&&");
                OR = new Filter.BooleanOperation("OR", 2, "||");
            } catch (Throwable var1) {
                if (var1 instanceof ExceptionInInitializerError) {
                    throw (ExceptionInInitializerError)var1;
                }


                throw var1;
            }


        }
    }

    @XMLClass
    public static enum LogicalOperation {
        EQ,
        NE,
        LT,
        GT,
        LE,
        GE,
        IN,
        CONTAINS_ALL,
        LIKE,
        NOTNULL,
        ISNULL,
        ISEMPTY,
        JOIN,
        LEFT_JOIN,
        COLLECTION_CONDITION;

        private String stringRepresentation;
        private String displayName;
        private String inverseOperationName;

        private LogicalOperation(String stringRepresentation, String displayName) {
            this(stringRepresentation, displayName, (String)null);

            Object[] var6 = new Object[]{var1, Conversions.intObject(var2), stringRepresentation, displayName};
            JoinPoint var5 = Factory.makeJP(var10000, this, this, var6);

            try {


            } catch (Throwable var12) {

                throw var12;
            }
        }

        private LogicalOperation(String stringRepresentation, String displayName, String inverseOperationName) {

            Object[] var7 = new Object[]{var1, Conversions.intObject(var2), stringRepresentation, displayName, inverseOperationName};
            JoinPoint var6 = Factory.makeJP(var10000, this, this, var7);

            try {

                this.stringRepresentation = stringRepresentation;
                this.displayName = displayName;
                this.inverseOperationName = inverseOperationName;

            } catch (Throwable var14) {

                throw var14;
            }
        }

        public String getStringRepresentation() {


            try {

                String var2;
                String var3 = var2 = this.stringRepresentation;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public String getDisplayName() {


            try {

                String var2;
                String var3 = var2 = this.displayName;

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        public Filter.LogicalOperation getInverseOperation() {


            try {

                Filter.LogicalOperation var2;
                Filter.LogicalOperation var3 = null != this.inverseOperationName ? (var2 = valueOf(this.inverseOperationName)) : (var2 = null);

                return var2;
            } catch (Throwable var5) {

                throw var5;
            }
        }

        static {



            try {
                EQ = new Filter.LogicalOperation("EQ", 0, "==", "Equals", "NE");
                NE = new Filter.LogicalOperation("NE", 1, "!=", "Does Not Equal", "EQ");
                LT = new Filter.LogicalOperation("LT", 2, "<", "Is Less Than", "GT");
                GT = new Filter.LogicalOperation("GT", 3, ">", "Is Greater Than", "LT");
                LE = new Filter.LogicalOperation("LE", 4, "<=", "Is Less Than Or Equal To", "GE");
                GE = new Filter.LogicalOperation("GE", 5, ">=", "Is Greater Than Or Equal To", "LE");
                IN = new Filter.LogicalOperation("IN", 6, "IN", "Includes");
                CONTAINS_ALL = new Filter.LogicalOperation("CONTAINS_ALL", 7, "CONTAINS_ALL", "Contains All Of");
                LIKE = new Filter.LogicalOperation("LIKE", 8, "LIKE", "Is Like");
                NOTNULL = new Filter.LogicalOperation("NOTNULL", 9, "NOTNULL", "Is Not Null", "ISNULL");
                ISNULL = new Filter.LogicalOperation("ISNULL", 10, "ISNULL", "Is Null", "NOTNULL");
                ISEMPTY = new Filter.LogicalOperation("ISEMPTY", 11, "ISEMPTY", "Is Empty");
                JOIN = new Filter.LogicalOperation("JOIN", 12, "JOIN", "Join");
                LEFT_JOIN = new Filter.LogicalOperation("LEFT_JOIN", 13, "LEFT_JOIN", "Left Join");
                COLLECTION_CONDITION = new Filter.LogicalOperation("COLLECTION_CONDITION", 14, "COLLECTION_CONDITION", "Collection Condition");
            } catch (Throwable var1) {
                if (var1 instanceof ExceptionInInitializerError) {
                    throw (ExceptionInInitializerError)var1;
                }


                throw var1;
            }


        }
    }

    @XMLClass
    public static enum MatchMode {
        ANYWHERE,
        START,
        END,
        EXACT;

        private MatchMode() {


            try {


            } catch (Throwable var7) {

                throw var7;
            }
        }

        public abstract String toMatchString(String var1, String var2);

        static {



            try {
                ANYWHERE = new Filter.MatchMode("ANYWHERE", 0) {
                    public String toMatchString(String val, String wildcard) {
                        return wildcard + val + wildcard;
                    }
                };
                START = new Filter.MatchMode("START", 1) {
                    public String toMatchString(String val, String wildcard) {
                        return val + wildcard;
                    }
                };
                END = new Filter.MatchMode("END", 2) {
                    public String toMatchString(String val, String wildcard) {
                        return wildcard + val;
                    }
                };
                EXACT = new Filter.MatchMode("EXACT", 3) {
                    public String toMatchString(String val, String wildcard) {
                        return val;
                    }
                };
            } catch (Throwable var1) {
                if (var1 instanceof ExceptionInInitializerError) {
                    throw (ExceptionInInitializerError)var1;
                }


                throw var1;
            }


        }
    }
}
