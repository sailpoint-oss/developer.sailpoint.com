---
id: v2024-access-profile-details
title: AccessProfileDetails
pagination_label: AccessProfileDetails
sidebar_label: AccessProfileDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileDetails', 'V2024AccessProfileDetails'] 
slug: /tools/sdk/go/v2024/models/access-profile-details
tags: ['SDK', 'Software Development Kit', 'AccessProfileDetails', 'V2024AccessProfileDetails']
---

# AccessProfileDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the Access Profile | [optional] 
**Name** | Pointer to **string** | Name of the Access Profile | [optional] 
**Description** | Pointer to **NullableString** | Information about the Access Profile | [optional] 
**Created** | Pointer to **time.Time** | Date the Access Profile was created | [optional] 
**Modified** | Pointer to **time.Time** | Date the Access Profile was last modified. | [optional] 
**Disabled** | Pointer to **bool** | Whether the Access Profile is enabled. | [optional] [default to true]
**Requestable** | Pointer to **bool** | Whether the Access Profile is requestable via access request. | [optional] [default to false]
**Protected** | Pointer to **bool** | Whether the Access Profile is protected. | [optional] [default to false]
**OwnerId** | Pointer to **string** | The owner ID of the Access Profile | [optional] 
**SourceId** | Pointer to **NullableInt64** | The source ID of the Access Profile | [optional] 
**SourceName** | Pointer to **string** | The source name of the Access Profile | [optional] 
**AppId** | Pointer to **NullableInt64** | The source app ID of the Access Profile | [optional] 
**AppName** | Pointer to **NullableString** | The source app name of the Access Profile | [optional] 
**ApplicationId** | Pointer to **string** | The id of the application | [optional] 
**Type** | Pointer to **string** | The type of the access profile | [optional] 
**Entitlements** | Pointer to **[]string** | List of IDs of entitlements | [optional] 
**EntitlementCount** | Pointer to **int32** | The number of entitlements in the access profile | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**ApprovalSchemes** | Pointer to **string** | Comma-separated list of approval schemes. Each approval scheme is one of - manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&amp;lt;workgroupId&amp;gt;  | [optional] 
**RevokeRequestApprovalSchemes** | Pointer to **string** | Comma-separated list of revoke request approval schemes. Each approval scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&amp;lt;workgroupId&amp;gt;  | [optional] 
**RequestCommentsRequired** | Pointer to **bool** | Whether the access profile require request comment for access request. | [optional] [default to false]
**DeniedCommentsRequired** | Pointer to **bool** | Whether denied comment is required when access request is denied. | [optional] [default to false]
**AccountSelector** | Pointer to [**AccessProfileDetailsAccountSelector**](access-profile-details-account-selector) |  | [optional] 

## Methods

### NewAccessProfileDetails

`func NewAccessProfileDetails() *AccessProfileDetails`

NewAccessProfileDetails instantiates a new AccessProfileDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileDetailsWithDefaults

`func NewAccessProfileDetailsWithDefaults() *AccessProfileDetails`

NewAccessProfileDetailsWithDefaults instantiates a new AccessProfileDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfileDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfileDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessProfileDetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfileDetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfileDetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfileDetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessProfileDetails) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessProfileDetails) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *AccessProfileDetails) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessProfileDetails) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessProfileDetails) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccessProfileDetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *AccessProfileDetails) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccessProfileDetails) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccessProfileDetails) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccessProfileDetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDisabled

`func (o *AccessProfileDetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *AccessProfileDetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *AccessProfileDetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *AccessProfileDetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetRequestable

`func (o *AccessProfileDetails) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *AccessProfileDetails) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *AccessProfileDetails) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *AccessProfileDetails) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetProtected

`func (o *AccessProfileDetails) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *AccessProfileDetails) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *AccessProfileDetails) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *AccessProfileDetails) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetOwnerId

`func (o *AccessProfileDetails) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *AccessProfileDetails) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *AccessProfileDetails) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *AccessProfileDetails) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetSourceId

`func (o *AccessProfileDetails) GetSourceId() int64`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessProfileDetails) GetSourceIdOk() (*int64, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessProfileDetails) SetSourceId(v int64)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessProfileDetails) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### SetSourceIdNil

`func (o *AccessProfileDetails) SetSourceIdNil(b bool)`

 SetSourceIdNil sets the value for SourceId to be an explicit nil

### UnsetSourceId
`func (o *AccessProfileDetails) UnsetSourceId()`

UnsetSourceId ensures that no value is present for SourceId, not even an explicit nil
### GetSourceName

`func (o *AccessProfileDetails) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessProfileDetails) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessProfileDetails) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessProfileDetails) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetAppId

`func (o *AccessProfileDetails) GetAppId() int64`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *AccessProfileDetails) GetAppIdOk() (*int64, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *AccessProfileDetails) SetAppId(v int64)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *AccessProfileDetails) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### SetAppIdNil

`func (o *AccessProfileDetails) SetAppIdNil(b bool)`

 SetAppIdNil sets the value for AppId to be an explicit nil

### UnsetAppId
`func (o *AccessProfileDetails) UnsetAppId()`

UnsetAppId ensures that no value is present for AppId, not even an explicit nil
### GetAppName

`func (o *AccessProfileDetails) GetAppName() string`

GetAppName returns the AppName field if non-nil, zero value otherwise.

### GetAppNameOk

`func (o *AccessProfileDetails) GetAppNameOk() (*string, bool)`

GetAppNameOk returns a tuple with the AppName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppName

`func (o *AccessProfileDetails) SetAppName(v string)`

SetAppName sets AppName field to given value.

### HasAppName

`func (o *AccessProfileDetails) HasAppName() bool`

HasAppName returns a boolean if a field has been set.

### SetAppNameNil

`func (o *AccessProfileDetails) SetAppNameNil(b bool)`

 SetAppNameNil sets the value for AppName to be an explicit nil

### UnsetAppName
`func (o *AccessProfileDetails) UnsetAppName()`

UnsetAppName ensures that no value is present for AppName, not even an explicit nil
### GetApplicationId

`func (o *AccessProfileDetails) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *AccessProfileDetails) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *AccessProfileDetails) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *AccessProfileDetails) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetType

`func (o *AccessProfileDetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessProfileDetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessProfileDetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessProfileDetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetEntitlements

`func (o *AccessProfileDetails) GetEntitlements() []string`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *AccessProfileDetails) GetEntitlementsOk() (*[]string, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *AccessProfileDetails) SetEntitlements(v []string)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *AccessProfileDetails) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *AccessProfileDetails) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccessProfileDetails) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccessProfileDetails) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccessProfileDetails) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetSegments

`func (o *AccessProfileDetails) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *AccessProfileDetails) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *AccessProfileDetails) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *AccessProfileDetails) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetApprovalSchemes

`func (o *AccessProfileDetails) GetApprovalSchemes() string`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *AccessProfileDetails) GetApprovalSchemesOk() (*string, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *AccessProfileDetails) SetApprovalSchemes(v string)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *AccessProfileDetails) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### GetRevokeRequestApprovalSchemes

`func (o *AccessProfileDetails) GetRevokeRequestApprovalSchemes() string`

GetRevokeRequestApprovalSchemes returns the RevokeRequestApprovalSchemes field if non-nil, zero value otherwise.

### GetRevokeRequestApprovalSchemesOk

`func (o *AccessProfileDetails) GetRevokeRequestApprovalSchemesOk() (*string, bool)`

GetRevokeRequestApprovalSchemesOk returns a tuple with the RevokeRequestApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevokeRequestApprovalSchemes

`func (o *AccessProfileDetails) SetRevokeRequestApprovalSchemes(v string)`

SetRevokeRequestApprovalSchemes sets RevokeRequestApprovalSchemes field to given value.

### HasRevokeRequestApprovalSchemes

`func (o *AccessProfileDetails) HasRevokeRequestApprovalSchemes() bool`

HasRevokeRequestApprovalSchemes returns a boolean if a field has been set.

### GetRequestCommentsRequired

`func (o *AccessProfileDetails) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *AccessProfileDetails) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *AccessProfileDetails) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *AccessProfileDetails) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.

### GetDeniedCommentsRequired

`func (o *AccessProfileDetails) GetDeniedCommentsRequired() bool`

GetDeniedCommentsRequired returns the DeniedCommentsRequired field if non-nil, zero value otherwise.

### GetDeniedCommentsRequiredOk

`func (o *AccessProfileDetails) GetDeniedCommentsRequiredOk() (*bool, bool)`

GetDeniedCommentsRequiredOk returns a tuple with the DeniedCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeniedCommentsRequired

`func (o *AccessProfileDetails) SetDeniedCommentsRequired(v bool)`

SetDeniedCommentsRequired sets DeniedCommentsRequired field to given value.

### HasDeniedCommentsRequired

`func (o *AccessProfileDetails) HasDeniedCommentsRequired() bool`

HasDeniedCommentsRequired returns a boolean if a field has been set.

### GetAccountSelector

`func (o *AccessProfileDetails) GetAccountSelector() AccessProfileDetailsAccountSelector`

GetAccountSelector returns the AccountSelector field if non-nil, zero value otherwise.

### GetAccountSelectorOk

`func (o *AccessProfileDetails) GetAccountSelectorOk() (*AccessProfileDetailsAccountSelector, bool)`

GetAccountSelectorOk returns a tuple with the AccountSelector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSelector

`func (o *AccessProfileDetails) SetAccountSelector(v AccessProfileDetailsAccountSelector)`

SetAccountSelector sets AccountSelector field to given value.

### HasAccountSelector

`func (o *AccessProfileDetails) HasAccountSelector() bool`

HasAccountSelector returns a boolean if a field has been set.


