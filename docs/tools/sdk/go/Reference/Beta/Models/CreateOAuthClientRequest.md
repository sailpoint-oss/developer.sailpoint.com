---
id: beta-create-o-auth-client-request
title: CreateOAuthClientRequest
pagination_label: CreateOAuthClientRequest
sidebar_label: CreateOAuthClientRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateOAuthClientRequest', 'BetaCreateOAuthClientRequest'] 
slug: /tools/sdk/go/beta/models/create-o-auth-client-request
tags: ['SDK', 'Software Development Kit', 'CreateOAuthClientRequest', 'BetaCreateOAuthClientRequest']
---

# CreateOAuthClientRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessName** | Pointer to **NullableString** | The name of the business the API Client should belong to | [optional] 
**HomepageUrl** | Pointer to **NullableString** | The homepage URL associated with the owner of the API Client | [optional] 
**Name** | **NullableString** | A human-readable name for the API Client | 
**Description** | **NullableString** | A description of the API Client | 
**AccessTokenValiditySeconds** | **int32** | The number of seconds an access token generated for this API Client is valid for | 
**RefreshTokenValiditySeconds** | Pointer to **int32** | The number of seconds a refresh token generated for this API Client is valid for | [optional] 
**RedirectUris** | Pointer to **[]string** | A list of the approved redirect URIs. Provide one or more URIs when assigning the AUTHORIZATION_CODE grant type to a new OAuth Client. | [optional] 
**GrantTypes** | [**[]GrantType**](grant-type) | A list of OAuth 2.0 grant types this API Client can be used with | 
**AccessType** | [**AccessType**](access-type) |  | 
**Type** | Pointer to [**ClientType**](client-type) |  | [optional] 
**Internal** | Pointer to **bool** | An indicator of whether the API Client can be used for requests internal within the product. | [optional] 
**Enabled** | **bool** | An indicator of whether the API Client is enabled for use | 
**StrongAuthSupported** | Pointer to **bool** | An indicator of whether the API Client supports strong authentication | [optional] 
**ClaimsSupported** | Pointer to **bool** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [optional] 
**Scope** | Pointer to **[]string** | Scopes of the API Client. If no scope is specified, the client will be created with the default scope \"sp:scopes:all\". This means the API Client will have all the rights of the owner who created it. | [optional] 

## Methods

### NewCreateOAuthClientRequest

`func NewCreateOAuthClientRequest(name NullableString, description NullableString, accessTokenValiditySeconds int32, grantTypes []GrantType, accessType AccessType, enabled bool, ) *CreateOAuthClientRequest`

NewCreateOAuthClientRequest instantiates a new CreateOAuthClientRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOAuthClientRequestWithDefaults

`func NewCreateOAuthClientRequestWithDefaults() *CreateOAuthClientRequest`

NewCreateOAuthClientRequestWithDefaults instantiates a new CreateOAuthClientRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessName

`func (o *CreateOAuthClientRequest) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *CreateOAuthClientRequest) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *CreateOAuthClientRequest) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.

### HasBusinessName

`func (o *CreateOAuthClientRequest) HasBusinessName() bool`

HasBusinessName returns a boolean if a field has been set.

### SetBusinessNameNil

`func (o *CreateOAuthClientRequest) SetBusinessNameNil(b bool)`

 SetBusinessNameNil sets the value for BusinessName to be an explicit nil

### UnsetBusinessName
`func (o *CreateOAuthClientRequest) UnsetBusinessName()`

UnsetBusinessName ensures that no value is present for BusinessName, not even an explicit nil
### GetHomepageUrl

`func (o *CreateOAuthClientRequest) GetHomepageUrl() string`

GetHomepageUrl returns the HomepageUrl field if non-nil, zero value otherwise.

### GetHomepageUrlOk

`func (o *CreateOAuthClientRequest) GetHomepageUrlOk() (*string, bool)`

GetHomepageUrlOk returns a tuple with the HomepageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHomepageUrl

`func (o *CreateOAuthClientRequest) SetHomepageUrl(v string)`

SetHomepageUrl sets HomepageUrl field to given value.

### HasHomepageUrl

`func (o *CreateOAuthClientRequest) HasHomepageUrl() bool`

HasHomepageUrl returns a boolean if a field has been set.

### SetHomepageUrlNil

`func (o *CreateOAuthClientRequest) SetHomepageUrlNil(b bool)`

 SetHomepageUrlNil sets the value for HomepageUrl to be an explicit nil

### UnsetHomepageUrl
`func (o *CreateOAuthClientRequest) UnsetHomepageUrl()`

UnsetHomepageUrl ensures that no value is present for HomepageUrl, not even an explicit nil
### GetName

`func (o *CreateOAuthClientRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateOAuthClientRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateOAuthClientRequest) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *CreateOAuthClientRequest) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CreateOAuthClientRequest) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *CreateOAuthClientRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateOAuthClientRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateOAuthClientRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *CreateOAuthClientRequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CreateOAuthClientRequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAccessTokenValiditySeconds

`func (o *CreateOAuthClientRequest) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *CreateOAuthClientRequest) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *CreateOAuthClientRequest) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.


### GetRefreshTokenValiditySeconds

`func (o *CreateOAuthClientRequest) GetRefreshTokenValiditySeconds() int32`

GetRefreshTokenValiditySeconds returns the RefreshTokenValiditySeconds field if non-nil, zero value otherwise.

### GetRefreshTokenValiditySecondsOk

`func (o *CreateOAuthClientRequest) GetRefreshTokenValiditySecondsOk() (*int32, bool)`

GetRefreshTokenValiditySecondsOk returns a tuple with the RefreshTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshTokenValiditySeconds

`func (o *CreateOAuthClientRequest) SetRefreshTokenValiditySeconds(v int32)`

SetRefreshTokenValiditySeconds sets RefreshTokenValiditySeconds field to given value.

### HasRefreshTokenValiditySeconds

`func (o *CreateOAuthClientRequest) HasRefreshTokenValiditySeconds() bool`

HasRefreshTokenValiditySeconds returns a boolean if a field has been set.

### GetRedirectUris

`func (o *CreateOAuthClientRequest) GetRedirectUris() []string`

GetRedirectUris returns the RedirectUris field if non-nil, zero value otherwise.

### GetRedirectUrisOk

`func (o *CreateOAuthClientRequest) GetRedirectUrisOk() (*[]string, bool)`

GetRedirectUrisOk returns a tuple with the RedirectUris field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUris

`func (o *CreateOAuthClientRequest) SetRedirectUris(v []string)`

SetRedirectUris sets RedirectUris field to given value.

### HasRedirectUris

`func (o *CreateOAuthClientRequest) HasRedirectUris() bool`

HasRedirectUris returns a boolean if a field has been set.

### SetRedirectUrisNil

`func (o *CreateOAuthClientRequest) SetRedirectUrisNil(b bool)`

 SetRedirectUrisNil sets the value for RedirectUris to be an explicit nil

### UnsetRedirectUris
`func (o *CreateOAuthClientRequest) UnsetRedirectUris()`

UnsetRedirectUris ensures that no value is present for RedirectUris, not even an explicit nil
### GetGrantTypes

`func (o *CreateOAuthClientRequest) GetGrantTypes() []GrantType`

GetGrantTypes returns the GrantTypes field if non-nil, zero value otherwise.

### GetGrantTypesOk

`func (o *CreateOAuthClientRequest) GetGrantTypesOk() (*[]GrantType, bool)`

GetGrantTypesOk returns a tuple with the GrantTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantTypes

`func (o *CreateOAuthClientRequest) SetGrantTypes(v []GrantType)`

SetGrantTypes sets GrantTypes field to given value.


### SetGrantTypesNil

`func (o *CreateOAuthClientRequest) SetGrantTypesNil(b bool)`

 SetGrantTypesNil sets the value for GrantTypes to be an explicit nil

### UnsetGrantTypes
`func (o *CreateOAuthClientRequest) UnsetGrantTypes()`

UnsetGrantTypes ensures that no value is present for GrantTypes, not even an explicit nil
### GetAccessType

`func (o *CreateOAuthClientRequest) GetAccessType() AccessType`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *CreateOAuthClientRequest) GetAccessTypeOk() (*AccessType, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *CreateOAuthClientRequest) SetAccessType(v AccessType)`

SetAccessType sets AccessType field to given value.


### GetType

`func (o *CreateOAuthClientRequest) GetType() ClientType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateOAuthClientRequest) GetTypeOk() (*ClientType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateOAuthClientRequest) SetType(v ClientType)`

SetType sets Type field to given value.

### HasType

`func (o *CreateOAuthClientRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInternal

`func (o *CreateOAuthClientRequest) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *CreateOAuthClientRequest) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *CreateOAuthClientRequest) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *CreateOAuthClientRequest) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetEnabled

`func (o *CreateOAuthClientRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CreateOAuthClientRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CreateOAuthClientRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetStrongAuthSupported

`func (o *CreateOAuthClientRequest) GetStrongAuthSupported() bool`

GetStrongAuthSupported returns the StrongAuthSupported field if non-nil, zero value otherwise.

### GetStrongAuthSupportedOk

`func (o *CreateOAuthClientRequest) GetStrongAuthSupportedOk() (*bool, bool)`

GetStrongAuthSupportedOk returns a tuple with the StrongAuthSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrongAuthSupported

`func (o *CreateOAuthClientRequest) SetStrongAuthSupported(v bool)`

SetStrongAuthSupported sets StrongAuthSupported field to given value.

### HasStrongAuthSupported

`func (o *CreateOAuthClientRequest) HasStrongAuthSupported() bool`

HasStrongAuthSupported returns a boolean if a field has been set.

### GetClaimsSupported

`func (o *CreateOAuthClientRequest) GetClaimsSupported() bool`

GetClaimsSupported returns the ClaimsSupported field if non-nil, zero value otherwise.

### GetClaimsSupportedOk

`func (o *CreateOAuthClientRequest) GetClaimsSupportedOk() (*bool, bool)`

GetClaimsSupportedOk returns a tuple with the ClaimsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimsSupported

`func (o *CreateOAuthClientRequest) SetClaimsSupported(v bool)`

SetClaimsSupported sets ClaimsSupported field to given value.

### HasClaimsSupported

`func (o *CreateOAuthClientRequest) HasClaimsSupported() bool`

HasClaimsSupported returns a boolean if a field has been set.

### GetScope

`func (o *CreateOAuthClientRequest) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *CreateOAuthClientRequest) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *CreateOAuthClientRequest) SetScope(v []string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *CreateOAuthClientRequest) HasScope() bool`

HasScope returns a boolean if a field has been set.

### SetScopeNil

`func (o *CreateOAuthClientRequest) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *CreateOAuthClientRequest) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil

