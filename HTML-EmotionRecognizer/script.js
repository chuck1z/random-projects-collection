const video = document.getElementById("video");
      const status = document.getElementById("status");

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.width = 640;
        video.height = 480;
        video.videoWidth = 640;
        video.videoHeight = 480;
      });

      async function detect() {
        const model = await tf.loadLayersModel("model/model.json");

        const img = tf.browser.fromPixels(video);
        const resized = tf.image.resizeBilinear(img, [48, 48]);
        const gray = resized.mean(2);
        const input = gray.toFloat().expandDims(0).expandDims(-1);
        const result = model.predict(input);
        const data = result.arraySync()[0];

        console.log(data);

        const maxIndex = data.indexOf(Math.max(...data));
        let emotion = "";
        switch (maxIndex) {
          case 0:
            emotion = "Angry";
            break;
          case 1:
            emotion = "Disgust";
            break;
          case 2:
            emotion = "Fear";
            break;
          case 3:
            emotion = "Happy";
            break;
          case 4:
            emotion = "Sad";
            break;
          case 5:
            emotion = "Surprise";
            break;
          case 6:
            emotion = "Neutral";
            break;
        }

        status.innerText = `Current Emotion: ${emotion}`;

        // Dispose tensors
        img.dispose();
        resized.dispose();
        gray.dispose();
        input.dispose();
        result.dispose();
      }

      video.ontimeupdate = () => {
        detect();
      };