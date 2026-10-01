# GetPersonalAccessTokenResponse

# GetPersonalAccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the personal access token (to be used as the username for Basic Auth). | 
**Name** | **string** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | 
**Scope** | **[]string** | Scopes of the personal  access token. | 
**Owner** | [**PatOwner**](pat-owner) |  | 
**Created** | **SailPointTime** | The date and time, down to the millisecond, when this personal access token was created. | 
**LastUsed** | Pointer to **NullableTime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**Managed** | Pointer to **bool** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to false]
**AccessTokenValiditySeconds** | Pointer to **int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] [default to 43200]
**ExpirationDate** | Pointer to **NullableTime** | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty, the token will never expire (and `userAwareTokenNeverExpires` will be `true`). When `expirationDate` is provided, this value must be a future date. There is no upper limit on how far in the future the expiration date can be set. | [optional] 
**UserAwareTokenNeverExpires** | Pointer to **bool** | Indicates that the user who created or updated this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When `true`, this flag confirms that the user understood the security risks associated with non-expiring tokens at the time of creation or update. **Security Awareness:** This field serves as a record that the user acknowledged: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Behavior:** * When `true`: Indicates that the user acknowledged they were creating a token that will never expire. When `expirationDate` is `null`, the token will never expire. * When `false`: The token follows normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [optional] [default to false]

## Methods

### NewGetPersonalAccessTokenResponse

`func NewGetPersonalAccessTokenResponse(id string, name string, scope []string, owner PatOwner, created SailPointTime, ) *GetPersonalAccessTokenResponse`

NewGetPersonalAccessTokenResponse instantiates a new GetPersonalAccessTokenResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPersonalAccessTokenResponseWithDefaults

`func NewGetPersonalAccessTokenResponseWithDefaults() *GetPersonalAccessTokenResponse`

NewGetPersonalAccessTokenResponseWithDefaults instantiates a new GetPersonalAccessTokenResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetPersonalAccessTokenResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetPersonalAccessTokenResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetPersonalAccessTokenResponse) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *GetPersonalAccessTokenResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetPersonalAccessTokenResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetPersonalAccessTokenResponse) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *GetPersonalAccessTokenResponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *GetPersonalAccessTokenResponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *GetPersonalAccessTokenResponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *GetPersonalAccessTokenResponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *GetPersonalAccessTokenResponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetOwner

`func (o *GetPersonalAccessTokenResponse) GetOwner() PatOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *GetPersonalAccessTokenResponse) GetOwnerOk() (*PatOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *GetPersonalAccessTokenResponse) SetOwner(v PatOwner)`

SetOwner sets Owner field to given value.


### GetCreated

`func (o *GetPersonalAccessTokenResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetPersonalAccessTokenResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetPersonalAccessTokenResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetLastUsed

`func (o *GetPersonalAccessTokenResponse) GetLastUsed() SailPointTime`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *GetPersonalAccessTokenResponse) GetLastUsedOk() (*SailPointTime, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *GetPersonalAccessTokenResponse) SetLastUsed(v SailPointTime)`

SetLastUsed sets LastUsed field to given value.

### HasLastUsed

`func (o *GetPersonalAccessTokenResponse) HasLastUsed() bool`

HasLastUsed returns a boolean if a field has been set.

### SetLastUsedNil

`func (o *GetPersonalAccessTokenResponse) SetLastUsedNil(b bool)`

 SetLastUsedNil sets the value for LastUsed to be an explicit nil

### UnsetLastUsed
`func (o *GetPersonalAccessTokenResponse) UnsetLastUsed()`

UnsetLastUsed ensures that no value is present for LastUsed, not even an explicit nil
### GetManaged

`func (o *GetPersonalAccessTokenResponse) GetManaged() bool`

GetManaged returns the Managed field if non-nil, zero value otherwise.

### GetManagedOk

`func (o *GetPersonalAccessTokenResponse) GetManagedOk() (*bool, bool)`

GetManagedOk returns a tuple with the Managed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManaged

`func (o *GetPersonalAccessTokenResponse) SetManaged(v bool)`

SetManaged sets Managed field to given value.

### HasManaged

`func (o *GetPersonalAccessTokenResponse) HasManaged() bool`

HasManaged returns a boolean if a field has been set.

### GetAccessTokenValiditySeconds

`func (o *GetPersonalAccessTokenResponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *GetPersonalAccessTokenResponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *GetPersonalAccessTokenResponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.

### HasAccessTokenValiditySeconds

`func (o *GetPersonalAccessTokenResponse) HasAccessTokenValiditySeconds() bool`

HasAccessTokenValiditySeconds returns a boolean if a field has been set.

### GetExpirationDate

`func (o *GetPersonalAccessTokenResponse) GetExpirationDate() SailPointTime`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *GetPersonalAccessTokenResponse) GetExpirationDateOk() (*SailPointTime, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *GetPersonalAccessTokenResponse) SetExpirationDate(v SailPointTime)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *GetPersonalAccessTokenResponse) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### SetExpirationDateNil

`func (o *GetPersonalAccessTokenResponse) SetExpirationDateNil(b bool)`

 SetExpirationDateNil sets the value for ExpirationDate to be an explicit nil

### UnsetExpirationDate
`func (o *GetPersonalAccessTokenResponse) UnsetExpirationDate()`

UnsetExpirationDate ensures that no value is present for ExpirationDate, not even an explicit nil
### GetUserAwareTokenNeverExpires

`func (o *GetPersonalAccessTokenResponse) GetUserAwareTokenNeverExpires() bool`

GetUserAwareTokenNeverExpires returns the UserAwareTokenNeverExpires field if non-nil, zero value otherwise.

### GetUserAwareTokenNeverExpiresOk

`func (o *GetPersonalAccessTokenResponse) GetUserAwareTokenNeverExpiresOk() (*bool, bool)`

GetUserAwareTokenNeverExpiresOk returns a tuple with the UserAwareTokenNeverExpires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserAwareTokenNeverExpires

`func (o *GetPersonalAccessTokenResponse) SetUserAwareTokenNeverExpires(v bool)`

SetUserAwareTokenNeverExpires sets UserAwareTokenNeverExpires field to given value.

### HasUserAwareTokenNeverExpires

`func (o *GetPersonalAccessTokenResponse) HasUserAwareTokenNeverExpires() bool`

HasUserAwareTokenNeverExpires returns a boolean if a field has been set.


