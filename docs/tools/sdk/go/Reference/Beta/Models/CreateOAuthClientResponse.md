---
id: beta-create-o-auth-client-response
title: CreateOAuthClientResponse
pagination_label: CreateOAuthClientResponse
sidebar_label: CreateOAuthClientResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateOAuthClientResponse', 'BetaCreateOAuthClientResponse'] 
slug: /tools/sdk/go/beta/models/create-o-auth-client-response
tags: ['SDK', 'Software Development Kit', 'CreateOAuthClientResponse', 'BetaCreateOAuthClientResponse']
---

# CreateOAuthClientResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the OAuth client | 
**Secret** | **string** | Secret of the OAuth client (This field is only returned on the intial create call.) | 
**BusinessName** | **string** | The name of the business the API Client should belong to | 
**HomepageUrl** | **string** | The homepage URL associated with the owner of the API Client | 
**Name** | **string** | A human-readable name for the API Client | 
**Description** | **string** | A description of the API Client | 
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
**Created** | **time.Time** | The date and time, down to the millisecond, when the API Client was created | 
**Modified** | **time.Time** | The date and time, down to the millisecond, when the API Client was last updated | 
**Scope** | **[]string** | Scopes of the API Client. | 

## Methods

### NewCreateOAuthClientResponse

`func NewCreateOAuthClientResponse(id string, secret string, businessName string, homepageUrl string, name string, description string, accessTokenValiditySeconds int32, refreshTokenValiditySeconds int32, redirectUris []string, grantTypes []GrantType, accessType AccessType, type_ ClientType, internal bool, enabled bool, strongAuthSupported bool, claimsSupported bool, created time.Time, modified time.Time, scope []string, ) *CreateOAuthClientResponse`

NewCreateOAuthClientResponse instantiates a new CreateOAuthClientResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOAuthClientResponseWithDefaults

`func NewCreateOAuthClientResponseWithDefaults() *CreateOAuthClientResponse`

NewCreateOAuthClientResponseWithDefaults instantiates a new CreateOAuthClientResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CreateOAuthClientResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreateOAuthClientResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreateOAuthClientResponse) SetId(v string)`

SetId sets Id field to given value.


### GetSecret

`func (o *CreateOAuthClientResponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *CreateOAuthClientResponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *CreateOAuthClientResponse) SetSecret(v string)`

SetSecret sets Secret field to given value.


### GetBusinessName

`func (o *CreateOAuthClientResponse) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *CreateOAuthClientResponse) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *CreateOAuthClientResponse) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### GetHomepageUrl

`func (o *CreateOAuthClientResponse) GetHomepageUrl() string`

GetHomepageUrl returns the HomepageUrl field if non-nil, zero value otherwise.

### GetHomepageUrlOk

`func (o *CreateOAuthClientResponse) GetHomepageUrlOk() (*string, bool)`

GetHomepageUrlOk returns a tuple with the HomepageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHomepageUrl

`func (o *CreateOAuthClientResponse) SetHomepageUrl(v string)`

SetHomepageUrl sets HomepageUrl field to given value.


### GetName

`func (o *CreateOAuthClientResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateOAuthClientResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateOAuthClientResponse) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CreateOAuthClientResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateOAuthClientResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateOAuthClientResponse) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetAccessTokenValiditySeconds

`func (o *CreateOAuthClientResponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *CreateOAuthClientResponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *CreateOAuthClientResponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.


### GetRefreshTokenValiditySeconds

`func (o *CreateOAuthClientResponse) GetRefreshTokenValiditySeconds() int32`

GetRefreshTokenValiditySeconds returns the RefreshTokenValiditySeconds field if non-nil, zero value otherwise.

### GetRefreshTokenValiditySecondsOk

`func (o *CreateOAuthClientResponse) GetRefreshTokenValiditySecondsOk() (*int32, bool)`

GetRefreshTokenValiditySecondsOk returns a tuple with the RefreshTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshTokenValiditySeconds

`func (o *CreateOAuthClientResponse) SetRefreshTokenValiditySeconds(v int32)`

SetRefreshTokenValiditySeconds sets RefreshTokenValiditySeconds field to given value.


### GetRedirectUris

`func (o *CreateOAuthClientResponse) GetRedirectUris() []string`

GetRedirectUris returns the RedirectUris field if non-nil, zero value otherwise.

### GetRedirectUrisOk

`func (o *CreateOAuthClientResponse) GetRedirectUrisOk() (*[]string, bool)`

GetRedirectUrisOk returns a tuple with the RedirectUris field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUris

`func (o *CreateOAuthClientResponse) SetRedirectUris(v []string)`

SetRedirectUris sets RedirectUris field to given value.


### GetGrantTypes

`func (o *CreateOAuthClientResponse) GetGrantTypes() []GrantType`

GetGrantTypes returns the GrantTypes field if non-nil, zero value otherwise.

### GetGrantTypesOk

`func (o *CreateOAuthClientResponse) GetGrantTypesOk() (*[]GrantType, bool)`

GetGrantTypesOk returns a tuple with the GrantTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantTypes

`func (o *CreateOAuthClientResponse) SetGrantTypes(v []GrantType)`

SetGrantTypes sets GrantTypes field to given value.


### GetAccessType

`func (o *CreateOAuthClientResponse) GetAccessType() AccessType`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *CreateOAuthClientResponse) GetAccessTypeOk() (*AccessType, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *CreateOAuthClientResponse) SetAccessType(v AccessType)`

SetAccessType sets AccessType field to given value.


### GetType

`func (o *CreateOAuthClientResponse) GetType() ClientType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateOAuthClientResponse) GetTypeOk() (*ClientType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateOAuthClientResponse) SetType(v ClientType)`

SetType sets Type field to given value.


### GetInternal

`func (o *CreateOAuthClientResponse) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *CreateOAuthClientResponse) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *CreateOAuthClientResponse) SetInternal(v bool)`

SetInternal sets Internal field to given value.


### GetEnabled

`func (o *CreateOAuthClientResponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CreateOAuthClientResponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CreateOAuthClientResponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetStrongAuthSupported

`func (o *CreateOAuthClientResponse) GetStrongAuthSupported() bool`

GetStrongAuthSupported returns the StrongAuthSupported field if non-nil, zero value otherwise.

### GetStrongAuthSupportedOk

`func (o *CreateOAuthClientResponse) GetStrongAuthSupportedOk() (*bool, bool)`

GetStrongAuthSupportedOk returns a tuple with the StrongAuthSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrongAuthSupported

`func (o *CreateOAuthClientResponse) SetStrongAuthSupported(v bool)`

SetStrongAuthSupported sets StrongAuthSupported field to given value.


### GetClaimsSupported

`func (o *CreateOAuthClientResponse) GetClaimsSupported() bool`

GetClaimsSupported returns the ClaimsSupported field if non-nil, zero value otherwise.

### GetClaimsSupportedOk

`func (o *CreateOAuthClientResponse) GetClaimsSupportedOk() (*bool, bool)`

GetClaimsSupportedOk returns a tuple with the ClaimsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimsSupported

`func (o *CreateOAuthClientResponse) SetClaimsSupported(v bool)`

SetClaimsSupported sets ClaimsSupported field to given value.


### GetCreated

`func (o *CreateOAuthClientResponse) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CreateOAuthClientResponse) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CreateOAuthClientResponse) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CreateOAuthClientResponse) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CreateOAuthClientResponse) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CreateOAuthClientResponse) SetModified(v time.Time)`

SetModified sets Modified field to given value.


### GetScope

`func (o *CreateOAuthClientResponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *CreateOAuthClientResponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *CreateOAuthClientResponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *CreateOAuthClientResponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *CreateOAuthClientResponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil

