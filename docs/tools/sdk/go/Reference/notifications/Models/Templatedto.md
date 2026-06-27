---
id: v1-templatedto
title: Templatedto
pagination_label: Templatedto
sidebar_label: Templatedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Templatedto', 'V1Templatedto'] 
slug: /tools/sdk/go/notifications/models/templatedto
tags: ['SDK', 'Software Development Kit', 'Templatedto', 'V1Templatedto']
---

# Templatedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** | The key of the template | 
**Name** | Pointer to **string** | The name of the Task Manager Subscription | [optional] 
**Medium** | **string** | The message medium. More mediums may be added in the future. | 
**Locale** | **string** | The locale for the message text, a BCP 47 language tag. | 
**Subject** | Pointer to **string** | The subject line in the template | [optional] 
**Header** | Pointer to **NullableString** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**Body** | Pointer to **string** | The body in the template | [optional] 
**Footer** | Pointer to **NullableString** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**From** | Pointer to **string** | The \"From:\" address in the template | [optional] 
**ReplyTo** | Pointer to **string** | The \"Reply To\" line in the template | [optional] 
**Description** | Pointer to **string** | The description in the template | [optional] 
**Id** | Pointer to **string** | This is auto-generated. | [optional] 
**Created** | Pointer to **SailPointTime** | The time when this template is created. This is auto-generated. | [optional] 
**Modified** | Pointer to **SailPointTime** | The time when this template was last modified. This is auto-generated. | [optional] 
**SlackTemplate** | Pointer to [**TemplatedtoSlackTemplate**](templatedto-slack-template) |  | [optional] 
**TeamsTemplate** | Pointer to [**TemplatedtoTeamsTemplate**](templatedto-teams-template) |  | [optional] 

## Methods

### NewTemplatedto

`func NewTemplatedto(key string, medium string, locale string, ) *Templatedto`

NewTemplatedto instantiates a new Templatedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplatedtoWithDefaults

`func NewTemplatedtoWithDefaults() *Templatedto`

NewTemplatedtoWithDefaults instantiates a new Templatedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Templatedto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Templatedto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Templatedto) SetKey(v string)`

SetKey sets Key field to given value.


### GetName

`func (o *Templatedto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Templatedto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Templatedto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Templatedto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMedium

`func (o *Templatedto) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *Templatedto) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *Templatedto) SetMedium(v string)`

SetMedium sets Medium field to given value.


### GetLocale

`func (o *Templatedto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Templatedto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Templatedto) SetLocale(v string)`

SetLocale sets Locale field to given value.


### GetSubject

`func (o *Templatedto) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *Templatedto) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *Templatedto) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *Templatedto) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetHeader

`func (o *Templatedto) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *Templatedto) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *Templatedto) SetHeader(v string)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *Templatedto) HasHeader() bool`

HasHeader returns a boolean if a field has been set.

### SetHeaderNil

`func (o *Templatedto) SetHeaderNil(b bool)`

 SetHeaderNil sets the value for Header to be an explicit nil

### UnsetHeader
`func (o *Templatedto) UnsetHeader()`

UnsetHeader ensures that no value is present for Header, not even an explicit nil
### GetBody

`func (o *Templatedto) GetBody() string`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *Templatedto) GetBodyOk() (*string, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *Templatedto) SetBody(v string)`

SetBody sets Body field to given value.

### HasBody

`func (o *Templatedto) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetFooter

`func (o *Templatedto) GetFooter() string`

GetFooter returns the Footer field if non-nil, zero value otherwise.

### GetFooterOk

`func (o *Templatedto) GetFooterOk() (*string, bool)`

GetFooterOk returns a tuple with the Footer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFooter

`func (o *Templatedto) SetFooter(v string)`

SetFooter sets Footer field to given value.

### HasFooter

`func (o *Templatedto) HasFooter() bool`

HasFooter returns a boolean if a field has been set.

### SetFooterNil

`func (o *Templatedto) SetFooterNil(b bool)`

 SetFooterNil sets the value for Footer to be an explicit nil

### UnsetFooter
`func (o *Templatedto) UnsetFooter()`

UnsetFooter ensures that no value is present for Footer, not even an explicit nil
### GetFrom

`func (o *Templatedto) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *Templatedto) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *Templatedto) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *Templatedto) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetReplyTo

`func (o *Templatedto) GetReplyTo() string`

GetReplyTo returns the ReplyTo field if non-nil, zero value otherwise.

### GetReplyToOk

`func (o *Templatedto) GetReplyToOk() (*string, bool)`

GetReplyToOk returns a tuple with the ReplyTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplyTo

`func (o *Templatedto) SetReplyTo(v string)`

SetReplyTo sets ReplyTo field to given value.

### HasReplyTo

`func (o *Templatedto) HasReplyTo() bool`

HasReplyTo returns a boolean if a field has been set.

### GetDescription

`func (o *Templatedto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Templatedto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Templatedto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Templatedto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *Templatedto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Templatedto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Templatedto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Templatedto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *Templatedto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Templatedto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Templatedto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Templatedto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Templatedto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Templatedto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Templatedto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Templatedto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetSlackTemplate

`func (o *Templatedto) GetSlackTemplate() TemplatedtoSlackTemplate`

GetSlackTemplate returns the SlackTemplate field if non-nil, zero value otherwise.

### GetSlackTemplateOk

`func (o *Templatedto) GetSlackTemplateOk() (*TemplatedtoSlackTemplate, bool)`

GetSlackTemplateOk returns a tuple with the SlackTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlackTemplate

`func (o *Templatedto) SetSlackTemplate(v TemplatedtoSlackTemplate)`

SetSlackTemplate sets SlackTemplate field to given value.

### HasSlackTemplate

`func (o *Templatedto) HasSlackTemplate() bool`

HasSlackTemplate returns a boolean if a field has been set.

### GetTeamsTemplate

`func (o *Templatedto) GetTeamsTemplate() TemplatedtoTeamsTemplate`

GetTeamsTemplate returns the TeamsTemplate field if non-nil, zero value otherwise.

### GetTeamsTemplateOk

`func (o *Templatedto) GetTeamsTemplateOk() (*TemplatedtoTeamsTemplate, bool)`

GetTeamsTemplateOk returns a tuple with the TeamsTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamsTemplate

`func (o *Templatedto) SetTeamsTemplate(v TemplatedtoTeamsTemplate)`

SetTeamsTemplate sets TeamsTemplate field to given value.

### HasTeamsTemplate

`func (o *Templatedto) HasTeamsTemplate() bool`

HasTeamsTemplate returns a boolean if a field has been set.


