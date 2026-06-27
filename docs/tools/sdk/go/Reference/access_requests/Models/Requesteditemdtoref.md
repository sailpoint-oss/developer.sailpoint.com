---
id: v1-requesteditemdtoref
title: Requesteditemdtoref
pagination_label: Requesteditemdtoref
sidebar_label: Requesteditemdtoref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requesteditemdtoref', 'V1Requesteditemdtoref'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemdtoref
tags: ['SDK', 'Software Development Kit', 'Requesteditemdtoref', 'V1Requesteditemdtoref']
---

# Requesteditemdtoref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the item being requested. | 
**Id** | **string** | ID of Role, Access Profile or Entitlement being requested. | 
**Comment** | Pointer to **string** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**StartDate** | Pointer to **SailPointTime** | The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date. * Specify a date-time in the future. * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for. * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible.  | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.  | [optional] 
**AccountSelection** | Pointer to [**[]Sourceitemref**](sourceitemref) | The accounts where the access item will be provisioned to * Includes selections performed by the user in the event of multiple accounts existing on the same source * Also includes details for sources where user only has one account  | [optional] 

## Methods

### NewRequesteditemdtoref

`func NewRequesteditemdtoref(type_ string, id string, ) *Requesteditemdtoref`

NewRequesteditemdtoref instantiates a new Requesteditemdtoref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemdtorefWithDefaults

`func NewRequesteditemdtorefWithDefaults() *Requesteditemdtoref`

NewRequesteditemdtorefWithDefaults instantiates a new Requesteditemdtoref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Requesteditemdtoref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Requesteditemdtoref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Requesteditemdtoref) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *Requesteditemdtoref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Requesteditemdtoref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Requesteditemdtoref) SetId(v string)`

SetId sets Id field to given value.


### GetComment

`func (o *Requesteditemdtoref) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Requesteditemdtoref) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Requesteditemdtoref) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Requesteditemdtoref) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetClientMetadata

`func (o *Requesteditemdtoref) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Requesteditemdtoref) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Requesteditemdtoref) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Requesteditemdtoref) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetStartDate

`func (o *Requesteditemdtoref) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Requesteditemdtoref) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Requesteditemdtoref) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Requesteditemdtoref) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetRemoveDate

`func (o *Requesteditemdtoref) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Requesteditemdtoref) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Requesteditemdtoref) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Requesteditemdtoref) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetAccountSelection

`func (o *Requesteditemdtoref) GetAccountSelection() []Sourceitemref`

GetAccountSelection returns the AccountSelection field if non-nil, zero value otherwise.

### GetAccountSelectionOk

`func (o *Requesteditemdtoref) GetAccountSelectionOk() (*[]Sourceitemref, bool)`

GetAccountSelectionOk returns a tuple with the AccountSelection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSelection

`func (o *Requesteditemdtoref) SetAccountSelection(v []Sourceitemref)`

SetAccountSelection sets AccountSelection field to given value.

### HasAccountSelection

`func (o *Requesteditemdtoref) HasAccountSelection() bool`

HasAccountSelection returns a boolean if a field has been set.

### SetAccountSelectionNil

`func (o *Requesteditemdtoref) SetAccountSelectionNil(b bool)`

 SetAccountSelectionNil sets the value for AccountSelection to be an explicit nil

### UnsetAccountSelection
`func (o *Requesteditemdtoref) UnsetAccountSelection()`

UnsetAccountSelection ensures that no value is present for AccountSelection, not even an explicit nil

