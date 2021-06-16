module.exports = ({
  ////// CONFIGURATION TEMPLATE: uncomment desired lines to override default config.
  ////// While all lines are commented, config will not change anything.
  toolbar: {
      items: [
          'heading',
          '|',
          'bold',
          'italic',
          'underline',
          'link',
          'bulletedList',
          'insertImage',
          'strapiMediaLib',
          '|',
          'indent',
          'outdent',
          '|',
          'insertTable',
          'mediaEmbed',
          '|',
          'fullScreen',
          'undo',
          'redo',
      ],
      // shouldNotGroupWhenFull: true
  },
  link: {
    decorators: {
      toggleNewWindow: {
        mode: 'manual',
        label: "New window",
        attributes: {
          target: "_blank",
          attributes: {
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        }
      },
      detectPdf: {
        mode: 'automatic',
        callback: url => url.endsWith( '.pdf' ),
        attributes: {
            "data-icon": 'pdf'
        }
      }
    }
  },
  image: {
      styles: [
        //   'alignLeft',
        //   'alignCenter',
        //   'alignRight',
      ],
      resizeOptions: [
        //   {
        //       name: 'resizeImage:original',
        //       value: null,
        //       icon: 'original'
        //   },
        //   {
        //       name: 'resizeImage:50',
        //       value: '50',
        //       icon: 'medium'
        //   },
        //   {
        //       name: 'resizeImage:75',
        //       value: '75',
        //       icon: 'large'
        //   }
      ],
      toolbar: [
        //   'imageStyle:alignLeft',
        //   'imageStyle:alignCenter',
        //   'imageStyle:alignRight',
        //   '|',
        //   'imageTextAlternative',
        //   '|',
        //   'resizeImage:50',
        //   'resizeImage:75',
        //   'resizeImage:original',
        //   '|',
        //   'linkImage',
      ]
  },
  table: {
      // contentToolbar: [
      //     'tableColumn',
      //     'tableRow',
      //     'mergeTableCells',
      //     'tableProperties',
      //     'tableCellProperties',
      // ]
  },
  heading: {
      options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading3', view: 'h3', title: 'Heading', class: 'ck-heading_heading1' },
      ]
  },
  htmlEmbed: {
      // showPreviews: true
  },
});