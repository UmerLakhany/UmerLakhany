import { Fragment } from "react";
import {
	FormControl,
	InputLabel,
	TextField,
	Typography,
	InputAdornment,
	CardMedia,
} from "@mui/material";
import { color } from "../../style/color";

function InputField(props) {
	const {
		name,
		rules,
		inputRef,
		variant,
		size,
		dir,
		label,
		placeholder,
		defaultValue,
		value,
		register,
		errors,
		rows,
		multiline,
		type,
		slotProps,
		disabled,
		onInput,
		onBlur,
		helperText,
		style,
		id,
		startAdornment,
		endAdornment,
	} = props;

	return (
		<Fragment>
			<FormControl
				variant="standard"
				fullWidth
				sx={{ mb: 2, ".MuiFormHelperText-root": { ml: 0 }, ...style }}
			>
				<TextField
					inputRef={inputRef}
					variant={variant ?? "filled"}
					size={size ?? "large"}
					dir={dir}
					value={value}
					type={type}
					disabled={disabled}
					placeholder={placeholder || label}
					defaultValue={defaultValue}
					id={id}
					multiline={multiline}
					rows={rows}
					label={label}
					onBlur={onBlur}
					slotProps={{
						input: {
							startAdornment: startAdornment && (
								<InputAdornment position="start">{startAdornment}</InputAdornment>
							),
							endAdornment: endAdornment && (
								<InputAdornment position="end" sx={{ cursor: "pointer" }}>
									{endAdornment}
								</InputAdornment>
							),
							...slotProps,
						},
					}}
					onInput={onInput}
					error={!!errors?.[name]}
					helperText={helperText}
					{...register(name, rules)}
					InputProps={{
						sx: {
							bgcolor: [color.formField],
							color: [color.text],
							borderRadius: 2,
							"&:after": {
								borderBottomColor: [color.primary],
							},
						},
					}}
					InputLabelProps={{ style: { color: [color.text] } }}
				/>
				{errors?.[name] && (
					<Typography color="error" sx={{ fontSize: 12, textAlign: "left" }}>
						{errors[name]?.message}
					</Typography>
				)}
			</FormControl>
		</Fragment>
	);
}

export default InputField;
