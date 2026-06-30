---
id: v1-getoauthclientresponse
title: Getoauthclientresponse
pagination_label: Getoauthclientresponse
sidebar_label: Getoauthclientresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Getoauthclientresponse', 'V1Getoauthclientresponse'] 
slug: /tools/sdk/go/oauthclients/models/getoauthclientresponse
tags: ['SDK', 'Software Development Kit', 'Getoauthclientresponse', 'V1Getoauthclientresponse']
---

# Getoauthclientresponse

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
**GrantTypes** | [**[]Granttype**](granttype) | A list of OAuth 2.0 grant types this API Client can be used with | 
**AccessType** | [**Accesstype**](accesstype) |  | 
**Type** | [**Clienttype**](clienttype) |  | 
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

### NewGetoauthclientresponse

`func NewGetoauthclientresponse(id string, businessName NullableString, homepageUrl NullableString, name string, description NullableString, accessTokenValiditySeconds int32, refreshTokenValiditySeconds int32, redirectUris []string, grantTypes []Granttype, accessType Accesstype, type_ Clienttype, internal bool, enabled bool, strongAuthSupported bool, claimsSupported bool, created SailPointTime, modified SailPointTime, scope []string, ) *Getoauthclientresponse`

NewGetoauthclientresponse instantiates a new Getoauthclientresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetoauthclientresponseWithDefaults

`func NewGetoauthclientresponseWithDefaults() *Getoauthclientresponse`

NewGetoauthclientresponseWithDefaults instantiates a new Getoauthclientresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Getoauthclientresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Getoauthclientresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Getoauthclientresponse) SetId(v string)`

SetId sets Id field to given value.


### GetBusinessName

`func (o *Getoauthclientresponse) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *Getoauthclientresponse) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *Getoauthclientresponse) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### SetBusinessNameNil

`func (o *Getoauthclientresponse) SetBusinessNameNil(b bool)`

 SetBusinessNameNil sets the value for BusinessName to be an explicit nil

### UnsetBusinessName
`func (o *Getoauthclientresponse) UnsetBusinessName()`

UnsetBusinessName ensures that no value is present for BusinessName, not even an explicit nil
### GetHomepageUrl

`func (o *Getoauthclientresponse) GetHomepageUrl() string`

GetHomepageUrl returns the HomepageUrl field if non-nil, zero value otherwise.

### GetHomepageUrlOk

`func (o *Getoauthclientresponse) GetHomepageUrlOk() (*string, bool)`

GetHomepageUrlOk returns a tuple with the HomepageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHomepageUrl

`func (o *Getoauthclientresponse) SetHomepageUrl(v string)`

SetHomepageUrl sets HomepageUrl field to given value.


### SetHomepageUrlNil

`func (o *Getoauthclientresponse) SetHomepageUrlNil(b bool)`

 SetHomepageUrlNil sets the value for HomepageUrl to be an explicit nil

### UnsetHomepageUrl
`func (o *Getoauthclientresponse) UnsetHomepageUrl()`

UnsetHomepageUrl ensures that no value is present for HomepageUrl, not even an explicit nil
### GetName

`func (o *Getoauthclientresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Getoauthclientresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Getoauthclientresponse) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Getoauthclientresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Getoauthclientresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Getoauthclientresponse) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *Getoauthclientresponse) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Getoauthclientresponse) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAccessTokenValiditySeconds

`func (o *Getoauthclientresponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *Getoauthclientresponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *Getoauthclientresponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.


### GetRefreshTokenValiditySeconds

`func (o *Getoauthclientresponse) GetRefreshTokenValiditySeconds() int32`

GetRefreshTokenValiditySeconds returns the RefreshTokenValiditySeconds field if non-nil, zero value otherwise.

### GetRefreshTokenValiditySecondsOk

`func (o *Getoauthclientresponse) GetRefreshTokenValiditySecondsOk() (*int32, bool)`

GetRefreshTokenValiditySecondsOk returns a tuple with the RefreshTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshTokenValiditySeconds

`func (o *Getoauthclientresponse) SetRefreshTokenValiditySeconds(v int32)`

SetRefreshTokenValiditySeconds sets RefreshTokenValiditySeconds field to given value.


### GetRedirectUris

`func (o *Getoauthclientresponse) GetRedirectUris() []string`

GetRedirectUris returns the RedirectUris field if non-nil, zero value otherwise.

### GetRedirectUrisOk

`func (o *Getoauthclientresponse) GetRedirectUrisOk() (*[]string, bool)`

GetRedirectUrisOk returns a tuple with the RedirectUris field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUris

`func (o *Getoauthclientresponse) SetRedirectUris(v []string)`

SetRedirectUris sets RedirectUris field to given value.


### SetRedirectUrisNil

`func (o *Getoauthclientresponse) SetRedirectUrisNil(b bool)`

 SetRedirectUrisNil sets the value for RedirectUris to be an explicit nil

### UnsetRedirectUris
`func (o *Getoauthclientresponse) UnsetRedirectUris()`

UnsetRedirectUris ensures that no value is present for RedirectUris, not even an explicit nil
### GetGrantTypes

`func (o *Getoauthclientresponse) GetGrantTypes() []Granttype`

GetGrantTypes returns the GrantTypes field if non-nil, zero value otherwise.

### GetGrantTypesOk

`func (o *Getoauthclientresponse) GetGrantTypesOk() (*[]Granttype, bool)`

GetGrantTypesOk returns a tuple with the GrantTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantTypes

`func (o *Getoauthclientresponse) SetGrantTypes(v []Granttype)`

SetGrantTypes sets GrantTypes field to given value.


### GetAccessType

`func (o *Getoauthclientresponse) GetAccessType() Accesstype`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *Getoauthclientresponse) GetAccessTypeOk() (*Accesstype, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *Getoauthclientresponse) SetAccessType(v Accesstype)`

SetAccessType sets AccessType field to given value.


### GetType

`func (o *Getoauthclientresponse) GetType() Clienttype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Getoauthclientresponse) GetTypeOk() (*Clienttype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Getoauthclientresponse) SetType(v Clienttype)`

SetType sets Type field to given value.


### GetInternal

`func (o *Getoauthclientresponse) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *Getoauthclientresponse) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *Getoauthclientresponse) SetInternal(v bool)`

SetInternal sets Internal field to given value.


### GetEnabled

`func (o *Getoauthclientresponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Getoauthclientresponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Getoauthclientresponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetStrongAuthSupported

`func (o *Getoauthclientresponse) GetStrongAuthSupported() bool`

GetStrongAuthSupported returns the StrongAuthSupported field if non-nil, zero value otherwise.

### GetStrongAuthSupportedOk

`func (o *Getoauthclientresponse) GetStrongAuthSupportedOk() (*bool, bool)`

GetStrongAuthSupportedOk returns a tuple with the StrongAuthSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrongAuthSupported

`func (o *Getoauthclientresponse) SetStrongAuthSupported(v bool)`

SetStrongAuthSupported sets StrongAuthSupported field to given value.


### GetClaimsSupported

`func (o *Getoauthclientresponse) GetClaimsSupported() bool`

GetClaimsSupported returns the ClaimsSupported field if non-nil, zero value otherwise.

### GetClaimsSupportedOk

`func (o *Getoauthclientresponse) GetClaimsSupportedOk() (*bool, bool)`

GetClaimsSupportedOk returns a tuple with the ClaimsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimsSupported

`func (o *Getoauthclientresponse) SetClaimsSupported(v bool)`

SetClaimsSupported sets ClaimsSupported field to given value.


### GetCreated

`func (o *Getoauthclientresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Getoauthclientresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Getoauthclientresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Getoauthclientresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Getoauthclientresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Getoauthclientresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetSecret

`func (o *Getoauthclientresponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Getoauthclientresponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Getoauthclientresponse) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *Getoauthclientresponse) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### SetSecretNil

`func (o *Getoauthclientresponse) SetSecretNil(b bool)`

 SetSecretNil sets the value for Secret to be an explicit nil

### UnsetSecret
`func (o *Getoauthclientresponse) UnsetSecret()`

UnsetSecret ensures that no value is present for Secret, not even an explicit nil
### GetMetadata

`func (o *Getoauthclientresponse) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Getoauthclientresponse) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Getoauthclientresponse) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Getoauthclientresponse) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *Getoauthclientresponse) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *Getoauthclientresponse) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetLastUsed

`func (o *Getoauthclientresponse) GetLastUsed() SailPointTime`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *Getoauthclientresponse) GetLastUsedOk() (*SailPointTime, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *Getoauthclientresponse) SetLastUsed(v SailPointTime)`

SetLastUsed sets LastUsed field to given value.

### HasLastUsed

`func (o *Getoauthclientresponse) HasLastUsed() bool`

HasLastUsed returns a boolean if a field has been set.

### SetLastUsedNil

`func (o *Getoauthclientresponse) SetLastUsedNil(b bool)`

 SetLastUsedNil sets the value for LastUsed to be an explicit nil

### UnsetLastUsed
`func (o *Getoauthclientresponse) UnsetLastUsed()`

UnsetLastUsed ensures that no value is present for LastUsed, not even an explicit nil
### GetScope

`func (o *Getoauthclientresponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Getoauthclientresponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Getoauthclientresponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *Getoauthclientresponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *Getoauthclientresponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil

