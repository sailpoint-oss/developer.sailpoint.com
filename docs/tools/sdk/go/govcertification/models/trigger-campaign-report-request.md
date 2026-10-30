# TriggerCampaignReportRequest

# TriggerCampaignReportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **CampaignReportType** |  | 
**Format** | **CampaignReportFormat** |  | 
**Name** | **string** | The name of the report. The final name will include a timestamp and the appropriate extension based on the format value | 

## Methods

### NewTriggerCampaignReportRequest

`func NewTriggerCampaignReportRequest(type_ CampaignReportType, format CampaignReportFormat, name string, ) *TriggerCampaignReportRequest`

NewTriggerCampaignReportRequest instantiates a new TriggerCampaignReportRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTriggerCampaignReportRequestWithDefaults

`func NewTriggerCampaignReportRequestWithDefaults() *TriggerCampaignReportRequest`

NewTriggerCampaignReportRequestWithDefaults instantiates a new TriggerCampaignReportRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TriggerCampaignReportRequest) GetType() CampaignReportType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TriggerCampaignReportRequest) GetTypeOk() (*CampaignReportType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TriggerCampaignReportRequest) SetType(v CampaignReportType)`

SetType sets Type field to given value.


### GetFormat

`func (o *TriggerCampaignReportRequest) GetFormat() CampaignReportFormat`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *TriggerCampaignReportRequest) GetFormatOk() (*CampaignReportFormat, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *TriggerCampaignReportRequest) SetFormat(v CampaignReportFormat)`

SetFormat sets Format field to given value.


### GetName

`func (o *TriggerCampaignReportRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TriggerCampaignReportRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TriggerCampaignReportRequest) SetName(v string)`

SetName sets Name field to given value.



