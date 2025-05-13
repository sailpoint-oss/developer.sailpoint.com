---
id: beta-get-o-auth-client-response
title: GetOAuthClientResponse
pagination_label: GetOAuthClientResponse
sidebar_label: GetOAuthClientResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetOAuthClientResponse', 'BetaGetOAuthClientResponse'] 
slug: /tools/sdk/go/beta/models/get-o-auth-client-response
tags: ['SDK', 'Software Development Kit', 'GetOAuthClientResponse', 'BetaGetOAuthClientResponse']
---

# GetOAuthClientResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the OAuth client | 
**BusinessName** | **NullableString** | The name of the business the API Client should belong to | 
**HomepageUrl** | **NullableString** | The homepage URL associated with the owner of the API Client | 
**Name** | **string** | A human-readable name for the API Client | 
**Description** | **NullableString** | A description of the API Client | 
**AccessTokenValiditySeconds** | **int32** | The number of seconds an access token generated for this API Client is valid for | 
**RefreshTokenValiditySeconds** | **int32** | The number of seconds a refresh token generated for this API Client is valid for | 
**RedirectUris** | **[]string** | A list of the approved redirect URIs used with the authorization_code flow | 
**GrantTypes** | [**[]GrantType**](grant-type) | A list of OAuth 2.0 grant types this API Client can be used with | 
**AccessType** | [**AccessType**](access-type) |  | 
**Type** | [**ClientType**](client-type) |  | 
**Internal** | **bool** | An indicator of whether the API Client can be used for requests internal to IDN | 
**Enabled** | **bool** | An indicator of whether the API Client is enabled for use | 
**StrongAuthSupported** | **bool** | An indicator of whether the API Client supports strong authentication | 
**ClaimsSupported** | **bool** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | 
**Created** | **SailPointTime** | The date and time, down to the millisecond, when the API Client was created | 
**Modified** | **SailPointTime** | The date and time, down to the millisecond, when the API Client was last updated | 
**Secret** | Pointer to **NullableString** |  | [optional] 
**Metadata** | Pointer to **NullableString** |  | [optional] 
**LastUsed** | Pointer to **NullableTime** | The date and time, down to the millisecond, when this API Client was last used to generate an access token. This timestamp does not get updated on every API Client usage, but only once a day. This property can be useful for identifying which API Clients are no longer actively used and can be removed. | [optional] 
**Scope** | **[]string** | Scopes of the API Client. | 

## Methods

### NewGetOAuthClientResponse

`func NewGetOAuthClientResponse(id string, businessName NullableString, homepageUrl NullableString, name string, description NullableString, accessTokenValiditySeconds int32, refreshTokenValiditySeconds int32, redirectUris []string, grantTypes []GrantType, accessType AccessType, type_ ClientType, internal bool, enabled bool, strongAuthSupported bool, claimsSupported bool, created SailPointTime, modified SailPointTime, scope []string, ) *GetOAuthClientResponse`

NewGetOAuthClientResponse instantiates a new GetOAuthClientResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetOAuthClientResponseWithDefaults

`func NewGetOAuthClientResponseWithDefaults() *GetOAuthClientResponse`

NewGetOAuthClientResponseWithDefaults instantiates a new GetOAuthClientResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetOAuthClientResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetOAuthClientResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetOAuthClientResponse) SetId(v string)`

SetId sets Id field to given value.


### GetBusinessName

`func (o *GetOAuthClientResponse) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *GetOAuthClientResponse) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *GetOAuthClientResponse) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### SetBusinessNameNil

`func (o *GetOAuthClientResponse) SetBusinessNameNil(b bool)`

 SetBusinessNameNil sets the value for BusinessName to be an explicit nil

### UnsetBusinessName
`func (o *GetOAuthClientResponse) UnsetBusinessName()`

UnsetBusinessName ensures that no value is present for BusinessName, not even an explicit nil
### GetHomepageUrl

`func (o *GetOAuthClientResponse) GetHomepageUrl() string`

GetHomepageUrl returns the HomepageUrl field if non-nil, zero value otherwise.

### GetHomepageUrlOk

`func (o *GetOAuthClientResponse) GetHomepageUrlOk() (*string, bool)`

GetHomepageUrlOk returns a tuple with the HomepageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHomepageUrl

`func (o *GetOAuthClientResponse) SetHomepageUrl(v string)`

SetHomepageUrl sets HomepageUrl field to given value.


### SetHomepageUrlNil

`func (o *GetOAuthClientResponse) SetHomepageUrlNil(b bool)`

 SetHomepageUrlNil sets the value for HomepageUrl to be an explicit nil

### UnsetHomepageUrl
`func (o *GetOAuthClientResponse) UnsetHomepageUrl()`

UnsetHomepageUrl ensures that no value is present for HomepageUrl, not even an explicit nil
### GetName

`func (o *GetOAuthClientResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetOAuthClientResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetOAuthClientResponse) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *GetOAuthClientResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetOAuthClientResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetOAuthClientResponse) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *GetOAuthClientResponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *GetOAuthClientResponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAccessTokenValiditySeconds

`func (o *GetOAuthClientResponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *GetOAuthClientResponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *GetOAuthClientResponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.


### GetRefreshTokenValiditySeconds

`func (o *GetOAuthClientResponse) GetRefreshTokenValiditySeconds() int32`

GetRefreshTokenValiditySeconds returns the RefreshTokenValiditySeconds field if non-nil, zero value otherwise.

### GetRefreshTokenValiditySecondsOk

`func (o *GetOAuthClientResponse) GetRefreshTokenValiditySecondsOk() (*int32, bool)`

GetRefreshTokenValiditySecondsOk returns a tuple with the RefreshTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshTokenValiditySeconds

`func (o *GetOAuthClientResponse) SetRefreshTokenValiditySeconds(v int32)`

SetRefreshTokenValiditySeconds sets RefreshTokenValiditySeconds field to given value.


### GetRedirectUris

`func (o *GetOAuthClientResponse) GetRedirectUris() []string`

GetRedirectUris returns the RedirectUris field if non-nil, zero value otherwise.

### GetRedirectUrisOk

`func (o *GetOAuthClientResponse) GetRedirectUrisOk() (*[]string, bool)`

GetRedirectUrisOk returns a tuple with the RedirectUris field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUris

`func (o *GetOAuthClientResponse) SetRedirectUris(v []string)`

SetRedirectUris sets RedirectUris field to given value.


### SetRedirectUrisNil

`func (o *GetOAuthClientResponse) SetRedirectUrisNil(b bool)`

 SetRedirectUrisNil sets the value for RedirectUris to be an explicit nil

### UnsetRedirectUris
`func (o *GetOAuthClientResponse) UnsetRedirectUris()`

UnsetRedirectUris ensures that no value is present for RedirectUris, not even an explicit nil
### GetGrantTypes

`func (o *GetOAuthClientResponse) GetGrantTypes() []GrantType`

GetGrantTypes returns the GrantTypes field if non-nil, zero value otherwise.

### GetGrantTypesOk

`func (o *GetOAuthClientResponse) GetGrantTypesOk() (*[]GrantType, bool)`

GetGrantTypesOk returns a tuple with the GrantTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantTypes

`func (o *GetOAuthClientResponse) SetGrantTypes(v []GrantType)`

SetGrantTypes sets GrantTypes field to given value.


### GetAccessType

`func (o *GetOAuthClientResponse) GetAccessType() AccessType`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *GetOAuthClientResponse) GetAccessTypeOk() (*AccessType, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *GetOAuthClientResponse) SetAccessType(v AccessType)`

SetAccessType sets AccessType field to given value.


### GetType

`func (o *GetOAuthClientResponse) GetType() ClientType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GetOAuthClientResponse) GetTypeOk() (*ClientType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GetOAuthClientResponse) SetType(v ClientType)`

SetType sets Type field to given value.


### GetInternal

`func (o *GetOAuthClientResponse) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *GetOAuthClientResponse) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *GetOAuthClientResponse) SetInternal(v bool)`

SetInternal sets Internal field to given value.


### GetEnabled

`func (o *GetOAuthClientResponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *GetOAuthClientResponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *GetOAuthClientResponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetStrongAuthSupported

`func (o *GetOAuthClientResponse) GetStrongAuthSupported() bool`

GetStrongAuthSupported returns the StrongAuthSupported field if non-nil, zero value otherwise.

### GetStrongAuthSupportedOk

`func (o *GetOAuthClientResponse) GetStrongAuthSupportedOk() (*bool, bool)`

GetStrongAuthSupportedOk returns a tuple with the StrongAuthSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrongAuthSupported

`func (o *GetOAuthClientResponse) SetStrongAuthSupported(v bool)`

SetStrongAuthSupported sets StrongAuthSupported field to given value.


### GetClaimsSupported

`func (o *GetOAuthClientResponse) GetClaimsSupported() bool`

GetClaimsSupported returns the ClaimsSupported field if non-nil, zero value otherwise.

### GetClaimsSupportedOk

`func (o *GetOAuthClientResponse) GetClaimsSupportedOk() (*bool, bool)`

GetClaimsSupportedOk returns a tuple with the ClaimsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimsSupported

`func (o *GetOAuthClientResponse) SetClaimsSupported(v bool)`

SetClaimsSupported sets ClaimsSupported field to given value.


### GetCreated

`func (o *GetOAuthClientResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetOAuthClientResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetOAuthClientResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *GetOAuthClientResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *GetOAuthClientResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *GetOAuthClientResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetSecret

`func (o *GetOAuthClientResponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *GetOAuthClientResponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *GetOAuthClientResponse) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *GetOAuthClientResponse) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### SetSecretNil

`func (o *GetOAuthClientResponse) SetSecretNil(b bool)`

 SetSecretNil sets the value for Secret to be an explicit nil

### UnsetSecret
`func (o *GetOAuthClientResponse) UnsetSecret()`

UnsetSecret ensures that no value is present for Secret, not even an explicit nil
### GetMetadata

`func (o *GetOAuthClientResponse) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *GetOAuthClientResponse) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *GetOAuthClientResponse) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *GetOAuthClientResponse) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *GetOAuthClientResponse) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *GetOAuthClientResponse) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetLastUsed

`func (o *GetOAuthClientResponse) GetLastUsed() SailPointTime`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *GetOAuthClientResponse) GetLastUsedOk() (*SailPointTime, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *GetOAuthClientResponse) SetLastUsed(v SailPointTime)`

SetLastUsed sets LastUsed field to given value.

### HasLastUsed

`func (o *GetOAuthClientResponse) HasLastUsed() bool`

HasLastUsed returns a boolean if a field has been set.

### SetLastUsedNil

`func (o *GetOAuthClientResponse) SetLastUsedNil(b bool)`

 SetLastUsedNil sets the value for LastUsed to be an explicit nil

### UnsetLastUsed
`func (o *GetOAuthClientResponse) UnsetLastUsed()`

UnsetLastUsed ensures that no value is present for LastUsed, not even an explicit nil
### GetScope

`func (o *GetOAuthClientResponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *GetOAuthClientResponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *GetOAuthClientResponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *GetOAuthClientResponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *GetOAuthClientResponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil

