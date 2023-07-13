package sailpoint.object;

public class Bundle {

    String _displayName;
    String _name;

    public Bundle() {
    }

    /**
     * Get the display name of the bundle
     * @return the displayName
     */
    public String getDisplayName() {
        return this._displayName;
    }

    /**
     * Get the displayable name of the bundle.
     * If the displayName is empty, return the name
     * @return the displayableName or Name
     */
    public String getDisplayableName() {
        return null == this._displayName ? this._name : this._displayName;
    }
}
