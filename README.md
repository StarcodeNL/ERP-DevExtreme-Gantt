# GantChart

The aim of this project is to integrate a DevExtreme Gant chart into a customer HTML element and export it as a StandAlone component.

## Intial setup

Clone the project from the repo
Run `npm i` at the root folder

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## IMPORTANT

For the GantChart to display results we need to convert the data that we get from the API to the following format:

    ##This field represents the id of the element
    id = response.production_order_id;

    ##This field represents the connection between the elements, if we have a parent_id mapped to a id which dose not exists in the results then IT WILL NOT BE VISIBLE in the element
    #Also the element is nullable beacuse if the parent_id is not specified then the GantChart will treat the object as a parent and not as child
    parentId = response.parent_id!;

    ##This field represents the end date time of the object
    #Make sure you add the Time property also, example: 1994-11-05T08:15:30-05:00 corresponds to November 5, 1994, 8:15:30 am
    end = new Date(response.end_date);


    ##This field represents the start date time of the object
    #Make sure you add the Time property also, example: 1994-11-05T08:15:30-05:00 corresponds to November 5, 1994, 8:15:30 am
    start = new Date(response.start_date);

    ##This field represents the title of the object
    title = this.getTitle(response);

    	##The getTitle method checks if the response object has the title in order_title or origin_description, if no property is detected the the string "No Title Detected" will be shown. See bellow

    	getTitle(response: any): any {
    	if (response.order_title) return response.order_title;
    	if (response.origin_description) return response.origin_description;
    	else return 'No Title Detected';
      }

    ##This represents the progress integer
    progress = response.progress;

## Usage of the binaries

Put the release binari files inside the wwwroot folder and link the path to a Iframe element

## Further help

To get more help on the DevExtreme gant chart check out [this page] (https://js.devexpress.com/Angular/Demos/WidgetsGallery/Demo/Gantt/Overview/MaterialBlueLight/)
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
