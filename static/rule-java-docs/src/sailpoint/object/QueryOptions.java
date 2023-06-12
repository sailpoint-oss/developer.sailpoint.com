package sailpoint.object;

import java.util.Iterator;
import java.util.List;

public class QueryOptions {

    private List<QueryOptions.Ordering> _orderings;
    private List<Filter> _filters;
    private boolean _distinct;
    private int _resultLimit;
    private int _firstRow;
    private List<String> _groupBys;
    private List<Filter> _scopeExtensions;
    private Boolean _scopeResults;
    private Boolean _unscopedGloballyAccessible;
    private String _query;
    private boolean _cacheResults;
    private boolean _flushBeforeQuery;


    public QueryOptions addFilter(Filter f) {
        return this.add(f);
    }

    public QueryOptions add(Filter... res) {
        if (res != null) {
            for (int i = 0; i < res.length; ++i) {
                Filter f = res[i];
                if (f != null) {
                    this._filters.add(f);
                }
            }
        }
        return this;
    }

    public QueryOptions setOrderBy(String name) {

        if (this._orderings.size() > 1) {
            throw new RuntimeException("Cannot set orderBy when multiple orderings have been added - use addOrdering()");
        } else {
            if (1 == this._orderings.size()) {
                QueryOptions.Ordering ordering = (QueryOptions.Ordering) this._orderings.get(0);
                if (null != ordering.getColumn()) {
                    throw new RuntimeException("The orderBy has already been set.");
                }

                ordering.setColumn(name);
            } else {
                this._orderings.add(new QueryOptions.Ordering(name, true));
            }

            return this;
        }
    }

    public QueryOptions setOrderAscending(boolean b) {
        if (this._orderings.size() > 1) {
            throw new RuntimeException("Cannot set ascending when multiple orderings have been added - use addOrdering()");
        } else {
            if (1 == this._orderings.size()) {
                ((QueryOptions.Ordering) this._orderings.get(0)).setAscending(b);
            } else {
                this._orderings.add(new QueryOptions.Ordering((String) null, b));
            }

            return this;
        }
    }

    public void setDistinct(boolean b) {
        this._distinct = b;
    }

    public QueryOptions setResultLimit(int limit) {

        this._resultLimit = limit;
        return this;
    }

    public int getFirstRow() {
        return this._firstRow;
    }

    public QueryOptions addOrdering(String name, boolean ascending) {
        return this;
    }

    public List<Filter> getFilters() {
        return this._filters;
    }

    public void setFilters(List<Filter> filters) {
        this._filters = filters;
    }

    public String toString() {
        StringBuffer sb = new StringBuffer();
        sb.append("Filters: ");
        sb.append(this.getFiltersString(this._filters));
        sb.append(", Scope extensions: ");
        sb.append(this.getFiltersString(this._scopeExtensions));
        sb.append(",scope results [" + this._scopeResults + "]");
        sb.append(",unscoped globally accessible [" + this._unscopedGloballyAccessible + "]");
        if (this._orderings != null) {
            sb.append(",Ordering ==" + this._orderings.toString() + "");
        }

        if (this._groupBys != null) {
            sb.append(",Group by == " + this._groupBys.toString());
        }

        sb.append(",Query [" + this._query + "]");
        sb.append(",ResultLimit [" + this._resultLimit + "]");
        sb.append(",First Row [" + this._firstRow + "]");
        sb.append(",Distinct [" + this._distinct + "]");
        sb.append(",Cache results [" + this._cacheResults + "]");
        sb.append(",Flush before query [" + this._flushBeforeQuery + "]");
        return sb.toString();
    }

    private String getFiltersString(List<Filter> filters) {
        StringBuilder sb = new StringBuilder();
        if (filters != null && filters.size() > 0) {
            int i = 1;
            Iterator var4 = filters.iterator();

            while (var4.hasNext()) {
                Filter filter = (Filter) var4.next();
                sb.append("Filter [" + i++ + "] == " + filter.getExpression() + "\n");
            }
        } else {
            sb.append("none defined");
        }

        String var8;
        String var9 = var8 = sb.toString();
        return var8;

    }


    public static class Ordering {
        private String column;
        private boolean ascending;
        private boolean ignoreCase;

        public Ordering(String column, boolean ascending, boolean ignoreCase) {
            this.column = column;
            this.ascending = ascending;
            this.ignoreCase = ignoreCase;
        }

        public Ordering(String column, boolean ascending) {
            this.column = column;
            this.ascending = ascending;
            this.ignoreCase = false;
        }

        public String getColumn() {
            return this.column;
        }

        public void setColumn(String column) {
            this.column = column;
        }

        public boolean isAscending() {
            return this.ascending;
        }

        public void setAscending(boolean ascending) {
            this.ascending = ascending;
        }

        public boolean isIgnoreCase() {
            return this.ignoreCase;
        }

        public String toString() {
            return this.column + " " + (this.ascending ? "ascending" : "descending");
        }
    }
}
