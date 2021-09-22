var fs = require('fs');
for (var j = 0; j < 4; j++) {
	for (var i = 0; i < 2000; i++) {
		console.log(`Running test ${j}${i}`);
		fs.appendFileSync(`testresults1.txt`, `[INFO] test ${j}${i} has passed successfully. For more info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis justo at volutpat. Vivamus pulvinar eros purus, in ullamcorper erat mattis id. Donec consequat sem at enim lobortis, sed tristique eros porta. Praesent sit amet ultricies velit. Nam sit amet velit eget sapien auctor luctus at eget tortor. Sed varius metus id convallis iaculis. Sed quis arcu venenatis, venenatis elit rutrum, luctus leo. Duis blandit non tellus ac mollis. Praesent fringilla magna eu massa tincidunt accumsan. Ut euismod eu nulla vitae fringilla. In congue ut lectus eu suscipit. Proin volutpat arcu a nisi mattis placerat. Nulla sagittis vel eros et tincidunt. Nam porta lectus ac porttitor auctor.\n`, function (err) {
			if (err) return console.log(err);
			console.log('Hello World > helloworld.txt');
		});
	}
	fs.appendFileSync(`testresults1.txt`, `[WARN] test ${j}${i}-A has warnings.\n`, function (err) {
	});
}
const { exec } = require("child_process");

fs.writeFileSync(`testresults.txt`, 'asd', () => {});

exec("cat testresults1.txt >> testresults2.txt", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    exec("cat testresults1.txt >> testresults2.txt", (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		exec("cat testresults2.txt >> testresults3.txt", (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			exec("cat testresults2.txt >> testresults3.txt", (error, stdout, stderr) => {
				if (error) {
					console.log(`error: ${error.message}`);
					return;
				}
				if (stderr) {
					console.log(`stderr: ${stderr}`);
					return;
				}
				exec("cat testresults3.txt >> testresults4.txt", (error, stdout, stderr) => {
					if (error) {
						console.log(`error: ${error.message}`);
						return;
					}
					if (stderr) {
						console.log(`stderr: ${stderr}`);
						return;
					}
					exec("cat testresults3.txt >> testresults4.txt", (error, stdout, stderr) => {
						if (error) {
							console.log(`error: ${error.message}`);
							return;
						}
						if (stderr) {
							console.log(`stderr: ${stderr}`);
							return;
						}
						exec("cat testresults3.txt >> testresults4.txt", (error, stdout, stderr) => {
							if (error) {
								console.log(`error: ${error.message}`);
								return;
							}
							if (stderr) {
								console.log(`stderr: ${stderr}`);
								return;
							}

							exec("cat testresults4.txt >> testresults.txt", (error, stdout, stderr) => {
								exec("cat testresults4.txt >> testresults.txt", (error, stdout, stderr) => {
									exec("cat testresults4.txt >> testresults.txt", (error, stdout, stderr) => {
										exec("cat testresults4.txt >> testresults.txt", (error, stdout, stderr) => {
											exec("rm testresults1.txt testresults2.txt testresults3.txt testresults4.txt", (error, stdout, stderr) => {
													if (error) {
														console.log(`error: ${error.message}`);
														return;
													}
													if (stderr) {
														console.log(`stderr: ${stderr}`);
														return;
													}
													console.log(`stdout: ${stdout}`);
												});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});