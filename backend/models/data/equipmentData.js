const equipment = [
  {
    "Equipment": [
      {
        "EquipmentID": "AHU-1",
        "EquipmentName": "Air Handler Unit 1",
        "EquipmentType": {
          "EquipmentTypeID": "101",
          "EquipmentClassID": "1"
        },
        "Location": "Mechanical Room Floor 1",
        "InstallationDate": "2018-05-12"
      },
      {
        "EquipmentID": "AHU-2",
        "EquipmentName": "Air Handler Unit 2",
        "EquipmentType": {
          "EquipmentTypeID": "101",
          "EquipmentClassID": "1"
        },
        "Location": "Mechanical Room Floor 10",
        "InstallationDate": "2018-05-15"
      },
      {
        "EquipmentID": "AHU-3",
        "EquipmentName": "Air Handler Unit 3",
        "EquipmentType": {
          "EquipmentTypeID": "101",
          "EquipmentClassID": "1"
        },
        "Location": "Mechanical Room Floor 5",
        "InstallationDate": "2018-05-18"
      },
      {
        "EquipmentID": "CH-1",
        "EquipmentName": "Chiller 1",
        "EquipmentType": {
          "EquipmentTypeID": "102",
          "EquipmentClassID": "1"
        },
        "Location": "Basement",
        "InstallationDate": "2018-02-10"
      },
      {
        "EquipmentID": "CH-2",
        "EquipmentName": "Chiller 2",
        "EquipmentType": {
          "EquipmentTypeID": "102",
          "EquipmentClassID": "1"
        },
        "Location": "Basement",
        "InstallationDate": "2018-02-10"
      },
      {
        "EquipmentID": "BLR-1",
        "EquipmentName": "Boiler 1",
        "EquipmentType": {
          "EquipmentTypeID": "103",
          "EquipmentClassID": "1"
        },
        "Location": "Basement",
        "InstallationDate": "2018-02-15"
      },
      {
        "EquipmentID": "BLR-2",
        "EquipmentName": "Boiler 2",
        "EquipmentType": {
          "EquipmentTypeID": "103",
          "EquipmentClassID": "1"
        },
        "Location": "Basement",
        "InstallationDate": "2018-02-15"
      },
      {
        "EquipmentID": "VAV-101",
        "EquipmentName": "VAV Box 101",
        "EquipmentType": {
          "EquipmentTypeID": "104",
          "EquipmentClassID": "1"
        },
        "Location": "Floor 1, Zone 1",
        "InstallationDate": "2018-05-20"
      },
      {
        "EquipmentID": "VAV-102",
        "EquipmentName": "VAV Box 102",
        "EquipmentType": {
          "EquipmentTypeID": "104",
          "EquipmentClassID": "1"
        },
        "Location": "Floor 1, Zone 2",
        "InstallationDate": "2018-05-20"
      },
      {
        "EquipmentID": "LED-F1",
        "EquipmentName": "LED Fixtures Floor 1",
        "EquipmentType": {
          "EquipmentTypeID": "201",
          "EquipmentClassID": "2"
        },
        "Location": "Floor 1",
        "InstallationDate": "2018-06-10"
      },
      {
        "EquipmentID": "LED-F2",
        "EquipmentName": "LED Fixtures Floor 2",
        "EquipmentType": {
          "EquipmentTypeID": "201",
          "EquipmentClassID": "2"
        },
        "Location": "Floor 2",
        "InstallationDate": "2018-06-12"
      },
      {
        "EquipmentID": "LED-F3",
        "EquipmentName": "LED Fixtures Floor 3",
        "EquipmentType": {
          "EquipmentTypeID": "201",
          "EquipmentClassID": "2"
        },
        "Location": "Floor 3",
        "InstallationDate": "2018-06-14"
      },
      {
        "EquipmentID": "FL-F4",
        "EquipmentName": "Fluorescent Fixtures Floor 4",
        "EquipmentType": {
          "EquipmentTypeID": "202",
          "EquipmentClassID": "2"
        },
        "Location": "Floor 4",
        "InstallationDate": "2015-05-10"
      },
      {
        "EquipmentID": "WH-1",
        "EquipmentName": "Water Heater 1",
        "EquipmentType": {
          "EquipmentTypeID": "301",
          "EquipmentClassID": "3"
        },
        "Location": "Basement",
        "InstallationDate": "2018-03-10"
      },
      {
        "EquipmentID": "WH-2",
        "EquipmentName": "Water Heater 2",
        "EquipmentType": {
          "EquipmentTypeID": "301",
          "EquipmentClassID": "3"
        },
        "Location": "Mechanical Room Floor 10",
        "InstallationDate": "2018-03-15"
      },
      {
        "EquipmentID": "SW-1",
        "EquipmentName": "Main Switchgear",
        "EquipmentType": {
          "EquipmentTypeID": "401",
          "EquipmentClassID": "4"
        },
        "Location": "Electrical Room Basement",
        "InstallationDate": "2018-01-10"
      },
      {
        "EquipmentID": "TR-1",
        "EquipmentName": "Transformer 1",
        "EquipmentType": {
          "EquipmentTypeID": "402",
          "EquipmentClassID": "4"
        },
        "Location": "Electrical Room Basement",
        "InstallationDate": "2018-01-15"
      },
      {
        "EquipmentID": "CAM-SYS",
        "EquipmentName": "Camera System",
        "EquipmentType": {
          "EquipmentTypeID": "501",
          "EquipmentClassID": "5"
        },
        "Location": "Building-wide",
        "InstallationDate": "2018-07-10"
      },
      {
        "EquipmentID": "SPRK-SYS",
        "EquipmentName": "Sprinkler System",
        "EquipmentType": {
          "EquipmentTypeID": "601",
          "EquipmentClassID": "6"
        },
        "Location": "Building-wide",
        "InstallationDate": "2018-04-10"
      },
      {
        "EquipmentID": "ELV-1",
        "EquipmentName": "Passenger Elevator 1",
        "EquipmentType": {
          "EquipmentTypeID": "701",
          "EquipmentClassID": "7"
        },
        "Location": "Main Elevator Bank",
        "InstallationDate": "2018-03-20"
      },
      {
        "EquipmentID": "ELV-2",
        "EquipmentName": "Passenger Elevator 2",
        "EquipmentType": {
          "EquipmentTypeID": "701",
          "EquipmentClassID": "7"
        },
        "Location": "Main Elevator Bank",
        "InstallationDate": "2018-03-20"
      },
      {
        "EquipmentID": "SOL-1",
        "EquipmentName": "Solar Panel Array",
        "EquipmentType": {
          "EquipmentTypeID": "801",
          "EquipmentClassID": "8"
        },
        "Location": "Roof",
        "InstallationDate": "2019-06-10"
      }
    ]
  }
];

module.exports = equipment;