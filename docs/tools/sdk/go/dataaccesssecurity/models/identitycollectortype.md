# Identitycollectortype

# Identitycollectortype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Identity collector type display name. Matches the `type` values returned by list and used by create/update metadata. Base types only (for example `Box`, not `Box SaaS`). | 
**IscConnectorNames** | **[]string** | Exact ISC `connectorName` values to use in `GET /v3/sources` filters (`connectorName eq \"...\"`). These are not always equal to `type` (for example Google Drive maps to `G Suite` and `Google Workspace SaaS`). | 

## Methods

### NewIdentitycollectortype

`func NewIdentitycollectortype(type_ string, iscConnectorNames []string, ) *Identitycollectortype`

NewIdentitycollectortype instantiates a new Identitycollectortype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectortypeWithDefaults

`func NewIdentitycollectortypeWithDefaults() *Identitycollectortype`

NewIdentitycollectortypeWithDefaults instantiates a new Identitycollectortype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Identitycollectortype) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identitycollectortype) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identitycollectortype) SetType(v string)`

SetType sets Type field to given value.


### GetIscConnectorNames

`func (o *Identitycollectortype) GetIscConnectorNames() []string`

GetIscConnectorNames returns the IscConnectorNames field if non-nil, zero value otherwise.

### GetIscConnectorNamesOk

`func (o *Identitycollectortype) GetIscConnectorNamesOk() (*[]string, bool)`

GetIscConnectorNamesOk returns a tuple with the IscConnectorNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIscConnectorNames

`func (o *Identitycollectortype) SetIscConnectorNames(v []string)`

SetIscConnectorNames sets IscConnectorNames field to given value.



